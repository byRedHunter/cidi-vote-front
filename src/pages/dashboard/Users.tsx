import {
	Button,
	SectionDescription,
	SectionTitle,
	ModalTitle,
} from '../../styles/utils'
import { UserWrapper } from '../../styles/pages/user'
import { SectionInfoUsers, TableFooter } from '../../styles/pages/home'
import TableHeader from '../../components/utils/TableHeader'
import TableBody from '../../components/utils/TableBody'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { useApp } from '../../store/useApp'
import { useUsers } from '../../store/useUsers'
import { useEffect } from 'react'
import { CreateUser } from '../../interfaces/index'
import { alert } from '../../config/alert'
import { Form, Formik } from 'formik'
import { schemaCreateUser } from '../../utils/schemas'
import { InputCheckbox, InputForm } from '../../components/shared/Formik'
import Loading from '../../components/shared/Loading'

const Users = () => {
	const { openModal, closeModal } = useApp((store) => store)
	const {
		users,
		getAllUsers,
		prevPage,
		nextPage,
		page,
		addNexPage,
		restNexPage,
		registerUser,
		loading,
	} = useUsers((store) => store)

	const initialValues = {
		dni: '62184520',
		name: 'User One',
		lastName: 'User One',
		isAdmin: false,
	}

	const handleSubmit = (values: CreateUser) => {
		if (String(values.dni).length !== 8)
			return alert.error('Ingrese un DNI válido')

		registerUser(values, closeModal)
	}

	useEffect(() => {
		getAllUsers()
		// eslint-disable-next-line
	}, [page])

	return (
		<UserWrapper>
			<SectionTitle>Lista de usuarios</SectionTitle>

			{!users && (
				<SectionDescription>
					Aún no hay usuarios disponibles, comience agregando uno.
				</SectionDescription>
			)}

			<Button onClick={openModal}>Agregar usuario</Button>

			{users && (
				<>
					<SectionInfoUsers>
						<TableHeader />

						{loading ? (
							<Loading />
						) : (
							users.map((user) => <TableBody key={user.uid} user={user} />)
						)}
					</SectionInfoUsers>

					<TableFooter>
						{prevPage && <button onClick={restNexPage}>Anterior</button>}
						{nextPage && <button onClick={addNexPage}>Siguiente</button>}
					</TableFooter>
				</>
			)}

			<ModalWrapper>
				<ModalTitle>Nuevo Usuario</ModalTitle>

				<SectionDescription>
					La contraseña del usuario por defecto sera su DNI. Aconseje al usuario
					cambiarlo por seguridad.
				</SectionDescription>

				<Formik
					initialValues={initialValues}
					validationSchema={schemaCreateUser}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<InputForm name='dni' id='dni' label='DNI' type='number' />

						<InputForm name='name' id='name' label='Nombres' type='text' />

						<InputForm
							name='lastName'
							id='lastName'
							label='Apellidos'
							type='text'
						/>

						<InputCheckbox
							name='isAdmin'
							type='checkbox'
							id='isAdmin'
							label='Marcar si es administrador'
						/>

						<Button type='submit'>Crear usuario</Button>
					</Form>
				</Formik>
			</ModalWrapper>
		</UserWrapper>
	)
}

export default Users
