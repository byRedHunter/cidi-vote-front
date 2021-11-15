import { ActionCard } from '../../interfaces/enums'
import { useApp } from '../../store/useApp'
import { ElectionInfo } from '../../interfaces/index'
import { useElection } from '../../store/useElection'
import {
	ElecctionActions,
	ElecctionCardWrapper,
	ElecctionTitle,
} from '../../styles/pages/home'

interface PropsElectionCard {
	action: ActionCard
	infoCard?: ElectionInfo
}

const ElectionCard = ({ action, infoCard }: PropsElectionCard) => {
	const { openModal } = useApp((store) => store)
	const { selectItemToEdit } = useElection((store) => store)
	// const { uid, position, description } = infoCard

	return (
		<ElecctionCardWrapper>
			<ElecctionTitle>{infoCard && infoCard.position}</ElecctionTitle>
			<p>{infoCard && infoCard.description}</p>
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
							<button onClick={() => infoCard && selectItemToEdit(infoCard)}>
								Editar
							</button>
							<button>Eliminar</button>
						</div>
						<button className='main'>Cerrar</button>
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
	)
}

export default ElectionCard
