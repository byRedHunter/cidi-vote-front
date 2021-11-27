import Image from './Image'
import { CardCWrapper } from '../../styles/utils'
import { UserInfo } from '../../interfaces/index'
import { useApp } from '../../store/useApp'
import { TypeAction } from '../../interfaces/enums'

interface CardCandidateProps {
	infoCandidate: UserInfo
}

const CardCandidate = ({ infoCandidate }: CardCandidateProps) => {
	const { uid, name, lastName } = infoCandidate
	const { openAction } = useApp((state) => state)

	const handleDelete = () => {
		openAction({
			uid,
			typeAction: TypeAction.removeCandidate,
			message: '¿Seguro que quiere quitar este candidato?',
		})
	}

	return (
		<CardCWrapper>
			<Image
				src='https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg'
				alt='Nombre'
			/>
			<div>
				<p>{`${name} ${lastName}`}</p>
				<button onClick={handleDelete}>Quitar</button>
			</div>
		</CardCWrapper>
	)
}

export default CardCandidate
