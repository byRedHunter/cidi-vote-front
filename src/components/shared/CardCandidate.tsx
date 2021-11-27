import Image from './Image'
import { CardCWrapper } from '../../styles/utils'
import { UserInfo } from '../../interfaces/index'

interface CardCandidateProps {
	infoCandidate: UserInfo
}

const CardCandidate = ({ infoCandidate }: CardCandidateProps) => {
	const { uid, name, lastName } = infoCandidate

	return (
		<CardCWrapper>
			<Image
				src='https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg'
				alt='Nombre'
			/>
			<div>
				<p>{`${name} ${lastName}`}</p>
				<button>Quitar</button>
			</div>
		</CardCWrapper>
	)
}

export default CardCandidate
