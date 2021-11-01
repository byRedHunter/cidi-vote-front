import Image from '../shared/Image'
import { Pencil, Trash } from 'react-ionicons'
import { InfoUsersGrid, TextUser, InfoActions } from '../../styles/pages/home'
import { UserInfo } from '../../interfaces/index'

interface Props {
	user: UserInfo
}

const TableBody = ({ user }: Props) => {
	const { dni, name, lastName } = user

	return (
		<InfoUsersGrid className='line'>
			<Image
				src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
				alt={name}
			/>
			<TextUser>{dni}</TextUser>
			<TextUser>
				{name}, {lastName}
			</TextUser>
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
