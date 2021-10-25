import { Button, SectionDescription, SectionTitle } from '../../styles/utils'
import { UserWrapper } from '../../styles/pages/user'
import { SectionInfoUsers, TableFooter } from '../../styles/pages/home'
import TableHeader from '../../components/utils/TableHeader'
import TableBody from '../../components/utils/TableBody'

const Users = () => {
	return (
		<UserWrapper>
			<SectionTitle>Lista de usuarios</SectionTitle>

			<SectionDescription>
				Aún no hay usuarios disponibles, comience agregando uno.
			</SectionDescription>

			<Button>Agregar usuario</Button>

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
		</UserWrapper>
	)
}

export default Users
