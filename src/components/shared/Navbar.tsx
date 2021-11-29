import { Link } from 'react-router-dom'
import { useApp } from '../../store/useApp'
import { useAuth } from '../../store/useAuth'
import {
	NavbarHeader,
	NavbarItem,
	NavbarMenu,
	NavbarWrapper,
} from '../../styles/shared/navbar'
const Navbar = () => {
	const { showMenu, toggleMenu } = useApp((store) => store)
	const { clearUser, userInfo } = useAuth((store) => store)

	return (
		<NavbarWrapper className={showMenu ? 'active' : ''}>
			<NavbarHeader>
				<figure>
					<img src='/images/logo.svg' alt='CIDI logo' />
				</figure>

				<button onClick={() => clearUser(toggleMenu)}>Salir</button>
			</NavbarHeader>

			<NavbarMenu>
				<ul>
					<NavbarItem>
						<Link to='/home' onClick={toggleMenu}>
							Dashboard
						</Link>
					</NavbarItem>

					{userInfo?.role === 'USER_ROLE' && (
						<>
							<NavbarItem>
								<Link to='/vote' onClick={toggleMenu}>
									Mis Elecciones
								</Link>
							</NavbarItem>
						</>
					)}

					{userInfo?.role === 'ADMIN_ROLE' && (
						<>
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
						</>
					)}

					<NavbarItem>
						<Link to='/perfil' onClick={toggleMenu}>
							Perfil
						</Link>
					</NavbarItem>
				</ul>
			</NavbarMenu>
		</NavbarWrapper>
	)
}

export default Navbar
