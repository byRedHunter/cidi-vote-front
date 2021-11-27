import Image from '../shared/Image'
import { UserInfo } from '../../interfaces/index'

interface UserModalProps {
	infoCandidate: UserInfo
}

const UserModal = ({ infoCandidate }: UserModalProps) => {
	const { uid, name, lastName } = infoCandidate

	return (
		<li className='line'>
			<Image
				src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg'
				alt='Nombre de la persona'
			/>
			<p> {`${name} ${lastName}`} </p>
			<button>Agregar</button>
		</li>
	)
}

export default UserModal
