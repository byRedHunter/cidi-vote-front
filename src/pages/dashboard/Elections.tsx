import ElectionCard from '../../components/shared/ElectionCard'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { ActionCard } from '../../interfaces/enums'
import { ElectionsWrapper } from '../../styles/pages/elections'
import { useApp } from '../../store/useApp'
import {
	Button,
	FormInput,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
const Elections = () => {
	const { openModal } = useApp((store) => store)

	return (
		<ElectionsWrapper>
			<ModalTitle>Elecciones</ModalTitle>

			<SectionDescription>
				Bienvenido, a la sección de elecciones, aqui podra crear nuevas
				elecciones, ver las existentes y editarlos.
			</SectionDescription>

			<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>

			<Button onClick={openModal}>Crear Elección</Button>

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard action={ActionCard.election} />

			<ModalWrapper>
				<ModalTitle>Crear Elección</ModalTitle>
				<SectionDescription>
					Asegurese de completar los campos requeridos.
				</SectionDescription>
				<form>
					<FormInput>
						<label htmlFor='cargo'>Cargo</label>
						<input type='text' id='cargo' name='cargo' />
					</FormInput>
					<FormInput>
						<label htmlFor='description'>Descripción</label>
						<textarea name='description' id='description'></textarea>
					</FormInput>

					<Button>Crear</Button>
				</form>
			</ModalWrapper>
		</ElectionsWrapper>
	)
}

export default Elections
