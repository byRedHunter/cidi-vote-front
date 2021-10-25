import { Button, SectionDescription } from '../../styles/utils'
import { UserWrapper } from '../../styles/pages/user'

const Users = () => {
	return (
		<UserWrapper>
			<SectionDescription>
				Aún no hay usuarios disponibles, comience agregando uno.
			</SectionDescription>

			<Button>Agregar usuario</Button>
		</UserWrapper>
	)
}

export default Users
