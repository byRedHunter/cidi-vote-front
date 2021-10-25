import { Link } from 'react-router-dom'
import ElectionCard from '../../components/shared/ElectionCard'
import { ActionCard } from '../../interfaces/enums'
import { VotersWrapper } from '../../styles/pages/voter'
import {
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'

const Voters = () => {
	return (
		<VotersWrapper>
			<SectionDescription>
				En esta seccion, Ud. podra agregar los votantes a una determinada
				elección.
			</SectionDescription>

			<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>

			<Link to='/elections' className='button-link'>
				Crear Elección
			</Link>

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard action={ActionCard.voters} />
		</VotersWrapper>
	)
}

export default Voters
