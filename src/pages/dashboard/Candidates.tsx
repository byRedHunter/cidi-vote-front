import { Search } from 'react-ionicons'
import { Link } from 'react-router-dom'
import ElectionCard from '../../components/shared/ElectionCard'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { ActionCard } from '../../interfaces/enums'
import { CandidatesWrapper } from '../../styles/pages/candidates'
import { ListCandidates, UlGrid } from '../../styles/utils'
import {
	FormInput,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
import CardCandidate from '../../components/shared/CardCandidate'
import UserModal from '../../components/utils/UserModal'

const Candidates = () => {
	return (
		<CandidatesWrapper>
			<ModalTitle>Candidatos</ModalTitle>

			<SectionDescription>
				En esta sección, Ud. podra agregar candidatos a una Elección.
			</SectionDescription>

			<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>

			<Link to='/elections' className='button-link'>
				Crear Elección
			</Link>

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard action={ActionCard.candidates} />

			<ModalWrapper>
				<ModalTitle>Agregar Candidatos</ModalTitle>
				<SectionDescription>
					Busque un usuario por DNI, nombre o apellido para agregarlo como
					candidato.
				</SectionDescription>

				<form>
					<FormInput>
						<label htmlFor='search'>Buscar</label>
						<input type='search' id='search' name='search' />
						<div className='icon'>
							<Search />
						</div>
					</FormInput>
				</form>

				<SectionInfo>Resultados</SectionInfo>
				<UlGrid>
					<li>
						<span>Foto</span>
						<span>Nombres</span>
						<span>Acciones</span>
					</li>

					<UserModal />
					<UserModal />
				</UlGrid>

				<SectionInfo>Candidatos</SectionInfo>
				<ListCandidates>
					<CardCandidate />
					<CardCandidate />
					<CardCandidate />
					<CardCandidate />
				</ListCandidates>
			</ModalWrapper>
		</CandidatesWrapper>
	)
}

export default Candidates
