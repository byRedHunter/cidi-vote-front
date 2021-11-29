import Image from '../shared/Image'
import { UserInfo } from '../../interfaces/index'
import { useCandidates } from '../../store/useCandidates'
import { useApp } from '../../store/useApp'
import { TypeAction } from '../../interfaces/enums'

interface UserModalProps {
	infoCandidate: UserInfo
}

const UserModal = ({ infoCandidate }: UserModalProps) => {
	const { uid, name, lastName } = infoCandidate

	const { addCandidate, addVoter } = useCandidates((store) => store)
	const { typeAction } = useApp((store) => store)

	const handleAdd = () => {
		console.log(typeAction)
		if (TypeAction.addCandidate === typeAction) addCandidate(uid)

		if (TypeAction.addVoter === typeAction) addVoter(uid)
	}

	return (
		<li className='line'>
			<Image
				src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg'
				alt='Nombre de la persona'
			/>
			<p> {`${name} ${lastName}`} </p>
			<button onClick={handleAdd}>Agregar</button>
		</li>
	)
}

export default UserModal
