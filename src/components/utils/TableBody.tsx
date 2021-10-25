import Image from '../shared/Image'
import { Pencil, Trash } from 'react-ionicons'
import { InfoUsersGrid, TextUser, InfoActions } from '../../styles/pages/home'

const TableBody = () => {
	return (
		<InfoUsersGrid className='line'>
			<Image
				src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
				alt='Perfil user'
			/>
			<TextUser>73109572</TextUser>
			<TextUser>Jazmín Lana, Martinez Suarez</TextUser>
			<InfoActions>
				<button>
					<Pencil />
				</button>
				<button>
					<Trash />
				</button>
			</InfoActions>
		</InfoUsersGrid>
	)
}

export default TableBody
