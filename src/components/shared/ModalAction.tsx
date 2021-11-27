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
	const { doingAction, closeAction, typeAction, uid, message } = useApp(
		(state) => state
	)
	const { closeElection, openElection, deleteElection } = useElection(
		(state) => state
	)
	const { removeCandidate } = useCandidates((state) => state)

	const handleAction = useCallback(() => {
		if (typeAction === TypeAction.closeElection && uid) closeElection(uid)

		if (typeAction === TypeAction.openelection && uid) openElection(uid)

		if (typeAction === TypeAction.deleteElection && uid) deleteElection(uid)

		if (typeAction === TypeAction.removeCandidate && uid) removeCandidate(uid)

		closeAction()

		// eslint-disable-next-line
	}, [typeAction, message])

	return (
		<Modal
			isOpen={doingAction}
			className='Modal'
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
