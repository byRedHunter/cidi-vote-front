import { Link } from 'react-router-dom'
import {
	NavbarHeader,
	NavbarItem,
	NavbarMenu,
	NavbarWrapper,
} from '../../styles/shared/navbar'
const Navbar = () => {
	return (
		<NavbarWrapper>
			<NavbarHeader>
				<figure>
					<img src='/images/logo.svg' alt='CIDI logo' />
				</figure>

				<button>Salir</button>
			</NavbarHeader>

			<NavbarMenu>
				<ul>
					<NavbarItem>
						<Link to='/home'>Dashboard</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/users'>Usuarios</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/elections'>Elecciones</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/candidates'>Candidatos</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/voters'>Votantes</Link>
					</NavbarItem>
				</ul>
			</NavbarMenu>
		</NavbarWrapper>
	)
}

export default Navbar
