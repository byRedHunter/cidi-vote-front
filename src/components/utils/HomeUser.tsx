import { ActionCard } from '../../interfaces/enums'
import {
	SectionTitle,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	ListCandidates,
} from '../../styles/utils'
import ElectionCard from '../shared/ElectionCard'
import { MessageHomeCliente } from '../../styles/pages/home'
import ModalWrapper from '../shared/ModalWrapper'
import CardCandidate from '../shared/CardCandidate'

const HomeUser = () => {
	return (
		<>
			<SectionTitle>Lista de Elecciones</SectionTitle>

			<MessageHomeCliente>
				<p>Bienvenido, aun no hay elecciones disponibles.</p>

				<figure>
					<img src='/images/logo.svg' alt='CIDI logo' />
				</figure>
			</MessageHomeCliente>

			{/* <ElectionCard action={ActionCard.user} /> */}

			<ModalWrapper>
				<ModalTitle>Emitir Voto</ModalTitle>
				<SectionDescription>
					Seleccione a su candidato favorito para emitir su voto.
				</SectionDescription>
				<SectionInfo>Candidatos</SectionInfo>

				<ListCandidates>{/* <CardCandidate /> */}</ListCandidates>
			</ModalWrapper>
		</>
	)
}

export default HomeUser
