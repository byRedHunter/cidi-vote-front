import { Link } from 'react-router-dom'
import ElectionCard from '../../components/shared/ElectionCard'
import { ActionCard } from '../../interfaces/enums'
import { CandidatesWrapper } from '../../styles/pages/candidates'
import {
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'

const Candidates = () => {
	return (
		<CandidatesWrapper>
			<SectionDescription>
				En esta sección, Ud. podra agregar candidatos a una Elección.
			</SectionDescription>

			<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>

			<Link to='/elections' className='button-link'>
				Crear Elección
			</Link>

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard action={ActionCard.candidates} />
		</CandidatesWrapper>
	)
}

export default Candidates
