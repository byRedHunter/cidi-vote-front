import Image from './Image'
import { CardCWrapper } from '../../styles/utils'

const CardCandidate = () => {
	return (
		<CardCWrapper>
			<Image
				src='https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507__340.jpg'
				alt='Nombre'
			/>
			<div>
				<p>Jhon Michael Dow Smith</p>
				<button>Quitar</button>
			</div>
		</CardCWrapper>
	)
}

export default CardCandidate
