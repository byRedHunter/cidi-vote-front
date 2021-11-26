import Modal from 'react-modal'
import { TypeAction } from '../../interfaces/enums'
import { useApp } from '../../store/useApp'
import { useElection } from '../../store/useElection'
import { ModalActionStyle } from '../../styles/shared/modalAction'

interface ActionProps {
	bg?: string
	message: string
}

const ModalAction = ({ bg, message }: ActionProps) => {
	const { doingAction, closeAction, typeAction, uid } = useApp((state) => state)
	const { closeElection, openElection } = useElection((state) => state)

	const handleAction = () => {
		if (typeAction === TypeAction.closeElection && uid) closeElection(uid)

		if (typeAction === TypeAction.openelection && uid) openElection(uid)

		closeAction()
	}

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
