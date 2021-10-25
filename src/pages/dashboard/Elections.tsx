import ElectionCard from '../../components/shared/ElectionCard'
import { ActionCard } from '../../interfaces/enums'
import { ElectionsWrapper } from '../../styles/pages/elections'
import {
	Button,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
const Elections = () => {
	return (
		<ElectionsWrapper>
			<SectionDescription>
				Bienvenido, a la sección de elecciones, aqui podra crear nuevas
				elecciones, ver las existentes y editarlos.
			</SectionDescription>

			<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>

			<Button>Crear Elección</Button>

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard action={ActionCard.election} />
		</ElectionsWrapper>
	)
}

export default Elections
