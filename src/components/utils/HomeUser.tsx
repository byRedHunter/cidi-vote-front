import { ActionCard } from '../../interfaces/enums'
import { SectionTitle } from '../../styles/utils'
import ElectionCard from '../shared/ElectionCard'
import { MessageHomeCliente } from '../../styles/pages/home'

const HomeUser = () => {
	return (
		<>
			<SectionTitle>Lista de Elecciones</SectionTitle>

			<MessageHomeCliente>
				<p>Bienvenido, aun no hay elecciones disponible.</p>

				<figure>
					<img src='/images/logo.svg' alt='CIDI logo' />
				</figure>
			</MessageHomeCliente>

			<ElectionCard action={ActionCard.user} />
		</>
	)
}

export default HomeUser
