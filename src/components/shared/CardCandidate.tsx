import Image from './Image'
import { CardCWrapper } from '../../styles/utils'
import { UserInfo } from '../../interfaces/index'
import { useApp } from '../../store/useApp'
import { TypeAction } from '../../interfaces/enums'

interface CardCandidateProps {
	infoCandidate: UserInfo
	user?: boolean
}

const CardCandidate = ({ infoCandidate, user }: CardCandidateProps) => {
	const { uid, name, lastName, image } = infoCandidate
	const { openAction } = useApp((state) => state)

	const andleAction = () => {
		if (user)
			return openAction({
				uid,
				typeAction: TypeAction.selectCandidate,
				message: `¿Seguro que quiere elegir a ${name} ${lastName}?`,
			})

		return openAction({
			uid,
			typeAction: TypeAction.removeCandidate,
			message: '¿Seguro que quiere quitar este candidato?',
		})
	}

	return (
		<CardCWrapper>
			<Image src={image} alt={`${name} ${lastName}`} />
			<div>
				<p>{`${name} ${lastName}`}</p>
				<button onClick={andleAction}>{user ? 'Elejir' : 'Quitar'}</button>
			</div>
		</CardCWrapper>
	)
}

export default CardCandidate
