import { Link } from 'react-router-dom'
import ElectionCard from '../../components/shared/ElectionCard'
import ModalWrapper from '../../components/shared/ModalWrapper'
import UserModal from '../../components/utils/UserModal'
import { ActionCard } from '../../interfaces/enums'
import { VotersWrapper } from '../../styles/pages/voter'
import { FormInput, ModalTitle, UlGrid } from '../../styles/utils'
import {
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'

const Voters = () => {
	return (
		<VotersWrapper>
			<ModalTitle>Votantes</ModalTitle>

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

			<ModalWrapper>
				<ModalTitle>Agregar Votantes</ModalTitle>
				<SectionDescription>
					Seleccione a los votantes, o puede filtrarlos por DNI, apellidos o
					nombres.
				</SectionDescription>

				<FormInput>
					<label htmlFor='filter'>Filtrar</label>
					<input type='text' name='filter' id='filter' />
				</FormInput>

				<SectionInfo>Lista de Usuarios</SectionInfo>
				<UlGrid>
					<li>
						<span>Foto</span>
						<span>Nombres</span>
						<span>Acciones</span>
					</li>
					<UserModal />
					<UserModal />
					<UserModal />
					<UserModal />
					<UserModal />
					<UserModal />
					<UserModal />
				</UlGrid>
			</ModalWrapper>
		</VotersWrapper>
	)
}

export default Voters
