import Image from '../shared/Image'
import { UserInfo } from '../../interfaces/index'
import { useCandidates } from '../../store/useCandidates'

interface UserModalProps {
	infoCandidate: UserInfo
}

const UserModal = ({ infoCandidate }: UserModalProps) => {
	const { uid, name, lastName } = infoCandidate
	const { addCandidate } = useCandidates((store) => store)

	return (
		<li className='line'>
			<Image
				src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg'
				alt='Nombre de la persona'
			/>
			<p> {`${name} ${lastName}`} </p>
			<button onClick={() => addCandidate(uid)}>Agregar</button>
		</li>
	)
}

export default UserModal
