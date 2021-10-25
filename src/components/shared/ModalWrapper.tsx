import Modal from 'react-modal'
import { Close } from 'react-ionicons'
import { useApp } from '../../store/useApp'
import { ButtonMenu } from '../../styles/utils'

interface PropsModal {
	children: JSX.Element[] | JSX.Element
}

const ModalWrapper = ({ children }: PropsModal) => {
	const { isModalOpen, closeModal } = useApp((store) => store)

	return (
		<Modal
			isOpen={isModalOpen}
			className='Modal'
			overlayClassName='Overlay'
			contentLabel='CIDI Modal'
			ariaHideApp={false}
		>
			<ButtonMenu className='button-modal' onClick={closeModal}>
				<Close />
			</ButtonMenu>

			<div className='content'>{children}</div>
		</Modal>
	)
}

export default ModalWrapper
