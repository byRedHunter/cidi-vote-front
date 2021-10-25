import {
	Button,
	SectionDescription,
	SectionTitle,
	ModalTitle,
	FormInput,
	FormCheck,
} from '../../styles/utils'
import { UserWrapper } from '../../styles/pages/user'
import { SectionInfoUsers, TableFooter } from '../../styles/pages/home'
import TableHeader from '../../components/utils/TableHeader'
import TableBody from '../../components/utils/TableBody'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { useApp } from '../../store/useApp'

const Users = () => {
	const { openModal } = useApp((store) => store)

	return (
		<UserWrapper>
			<SectionTitle>Lista de usuarios</SectionTitle>

			<SectionDescription>
				Aún no hay usuarios disponibles, comience agregando uno.
			</SectionDescription>

			<Button onClick={openModal}>Agregar usuario</Button>

			<SectionInfoUsers>
				<TableHeader />

				<TableBody />
				<TableBody />
				<TableBody />
				<TableBody />
				<TableBody />
			</SectionInfoUsers>

			<TableFooter>
				<button>Anterior</button>
				<button>Siguiente</button>
			</TableFooter>

			<ModalWrapper>
				<ModalTitle>Nuevo Usuario</ModalTitle>

				<SectionDescription>
					La contraseña del usuario por defecto sera su DNI. Aconseje al usuario
					cambiarlo por seguridad.
				</SectionDescription>

				<form>
					<FormInput>
						<label htmlFor='dni'>DNI</label>
						<input type='text' id='dni' />
					</FormInput>

					<FormInput>
						<label htmlFor='name'>Nombres</label>
						<input type='text' id='name' />
					</FormInput>

					<FormInput>
						<label htmlFor='lastName'>Apellidos</label>
						<input type='text' id='lastName' />
					</FormInput>

					<FormCheck>
						<label htmlFor='admin'>Marcar si es administrador</label>
						<input type='checkbox' id='admin' />
					</FormCheck>

					<Button type='submit'>Crear usuario</Button>
				</form>
			</ModalWrapper>
		</UserWrapper>
	)
}

export default Users
