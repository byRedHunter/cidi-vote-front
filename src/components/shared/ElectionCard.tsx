import { ActionCard, TypeAction } from '../../interfaces/enums'
import { useApp } from '../../store/useApp'
import { ElectionInfo } from '../../interfaces/index'
import { useElection } from '../../store/useElection'
import {
	ElecctionActions,
	ElecctionCardWrapper,
	ElecctionTitle,
} from '../../styles/pages/home'
import { useCandidates } from '../../store/useCandidates'

interface PropsElectionCard {
	action: ActionCard
	infoCard: ElectionInfo
	type?: string
}

const ElectionCard = ({ action, infoCard, type }: PropsElectionCard) => {
	const { openModal, openAction, addTypeAction, addTypeElection } = useApp(
		(store) => store
	)
	const { selectItemToEdit } = useElection((store) => store)
	const { getAllCandidates, selectElection, getAllVoters, getResults } =
		useCandidates((state) => state)

	const { uid, position, description, state, private: stateElection } = infoCard

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

	const handleAddCandidates = () => {
		openModal()
		getAllCandidates(uid)
		addTypeAction(TypeAction.addCandidate)
	}

	const handleAddVoters = () => {
		addTypeAction(TypeAction.addVoter)
		openModal()
		selectElection(uid)
	}

	const handleOpenCandidates = () => {
		openModal()
		addTypeElection(type || '')
		getAllCandidates(uid)
	}

	const handleCandidates = async () => {
		openModal()
		getAllCandidates(uid, position, 'candidates')
	}

	const handleVoters = async () => {
		openModal()
		getAllVoters(uid, position, 'voters')
	}

	const handleResults = async () => {
		openModal()
		getResults(uid, position, 'results')
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
								<button onClick={handleCandidates}>Candidatos</button>

								{stateElection && (
									<button onClick={handleVoters}>Votantes</button>
								)}
							</div>
							<button className='main' onClick={handleResults}>
								Resultados
							</button>
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
								<button onClick={handleAddCandidates}>Agregar</button>
							</div>
						</>
					)}

					{action === ActionCard.voters && (
						<>
							<div>
								<button onClick={handleAddVoters}>Agregar</button>
							</div>
						</>
					)}

					{action === ActionCard.user && (
						<>
							<div></div>
							<button className='main' onClick={handleOpenCandidates}>
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
