import { ActionCard, TypeAction } from '../../interfaces/enums'
import { useApp } from '../../store/useApp'
import { ElectionInfo } from '../../interfaces/index'
import { useElection } from '../../store/useElection'
import {
	ElecctionActions,
	ElecctionCardWrapper,
	ElecctionTitle,
} from '../../styles/pages/home'
import { useState } from 'react'

interface PropsElectionCard {
	action: ActionCard
	infoCard: ElectionInfo
}

const ElectionCard = ({ action, infoCard }: PropsElectionCard) => {
	const [message, setMessage] = useState('')

	const { openModal, openAction } = useApp((store) => store)
	const { selectItemToEdit } = useElection((store) => store)

	const { uid, position, description, state } = infoCard

	const handleOpenCloseElection = () => {
		if (state) {
			openAction({
				typeAction: TypeAction.closeElection,
				uid,
				message: 'Ud. esta a punto de cerrar la elección. ¿Estas seguro?',
			})
		} else {
			openAction({
				typeAction: TypeAction.openelection,
				uid,
				message: 'Ud. reabrira la elección. ¿Estas seguro?',
			})
		}
	}

	const handleDeleteElection = () => {
		openAction({
			typeAction: TypeAction.deleteElection,
			uid,
			message: 'Ud. esta a punto de eliminar la elección. ¿Estas seguro?',
		})
	}

	return (
		<>
			<ElecctionCardWrapper>
				<ElecctionTitle>{position}</ElecctionTitle>

				<p>
					{description} {state}
				</p>

				<ElecctionActions>
					{action === ActionCard.home && (
						<>
							<div>
								<button>Candidatos</button>
								<button>Votantes</button>
							</div>
							<button className='main'>Resultados</button>
						</>
					)}

					{action === ActionCard.election && (
						<>
							<div>
								<button onClick={() => selectItemToEdit(infoCard)}>
									Editar
								</button>

								<button onClick={handleDeleteElection}>Eliminar</button>
							</div>

							<button className='main' onClick={handleOpenCloseElection}>
								{state ? 'Cerrar' : 'Abrir'}
							</button>
						</>
					)}

					{action === ActionCard.candidates && (
						<>
							<div>
								<button onClick={openModal}>Agregar</button>
							</div>
						</>
					)}

					{action === ActionCard.voters && (
						<>
							<div>
								<button onClick={openModal}>Agregar</button>
							</div>
						</>
					)}

					{action === ActionCard.user && (
						<>
							<div></div>
							<button className='main' onClick={openModal}>
								Votar
							</button>
						</>
					)}
				</ElecctionActions>
			</ElecctionCardWrapper>
		</>
	)
}

export default ElectionCard
