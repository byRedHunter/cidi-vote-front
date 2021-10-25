import { Link } from 'react-router-dom'
import { useApp } from '../../store/useApp'
import {
	NavbarHeader,
	NavbarItem,
	NavbarMenu,
	NavbarWrapper,
} from '../../styles/shared/navbar'
const Navbar = () => {
	const { showMenu, toggleMenu } = useApp((store) => store)

	return (
		<NavbarWrapper className={showMenu ? 'active' : ''}>
			<NavbarHeader>
				<figure>
					<img src='/images/logo.svg' alt='CIDI logo' />
				</figure>

				<button>Salir</button>
			</NavbarHeader>

			<NavbarMenu>
				<ul>
					<NavbarItem>
						<Link to='/home' onClick={toggleMenu}>
							Dashboard
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/users' onClick={toggleMenu}>
							Usuarios
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/elections' onClick={toggleMenu}>
							Elecciones
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/candidates' onClick={toggleMenu}>
							Candidatos
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link to='/voters' onClick={toggleMenu}>
							Votantes
						</Link>
					</NavbarItem>
				</ul>
			</NavbarMenu>
		</NavbarWrapper>
	)
}

export default Navbar
