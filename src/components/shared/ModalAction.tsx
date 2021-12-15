import { useCallback } from 'react'
import Modal from 'react-modal'
import { TypeAction } from '../../interfaces/enums'
import { useApp } from '../../store/useApp'
import { useElection } from '../../store/useElection'
import { ModalActionStyle } from '../../styles/shared/modalAction'
import { useCandidates } from '../../store/useCandidates'

interface ActionProps {
	bg?: string
}

const ModalAction = ({ bg }: ActionProps) => {
	const {
		doingAction,
		closeAction,
		typeAction,
		uid,
		message,
		typeElection,
		closeModal,
	} = useApp((state) => state)
	const { closeElection, openElection, deleteElection, registerVote } =
		useElection((state) => state)
	const { removeCandidate, electionSelected } = useCandidates((state) => state)

	const handleAction = useCallback(() => {
		if (typeAction === TypeAction.closeElection && uid) closeElection(uid)

		if (typeAction === TypeAction.openelection && uid) openElection(uid)

		if (typeAction === TypeAction.deleteElection && uid) deleteElection(uid)

		if (typeAction === TypeAction.removeCandidate) removeCandidate(uid)

		if (typeAction === TypeAction.selectCandidate) {
			registerVote(electionSelected, uid, typeElection)
			closeModal()
		}

		closeAction()

		// eslint-disable-next-line
	}, [typeAction, message])

	return (
		<Modal
			isOpen={doingAction}
			className='Modal ModalAction'
			overlayClassName='Overlay'
			contentLabel='CIDI Actión'
			ariaHideApp={false}
		>
			<ModalActionStyle>
				<p> {message} </p>
				<div>
					<button onClick={() => closeAction()}>Cancelar</button>
					<button onClick={handleAction}>Aceptar</button>
				</div>
			</ModalActionStyle>
		</Modal>
	)
}

export default ModalAction
