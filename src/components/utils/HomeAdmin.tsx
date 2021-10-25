import { ActionCard } from '../../interfaces/enums'
import { SectionDescription, SectionTitle } from '../../styles/utils'
import ElectionCard from '../shared/ElectionCard'
import MessageHome from './MessageHome'
const HomeAdmin = () => {
	return (
		<>
			<SectionDescription>
				Bienvenido, a la sección de resultados, aqui podras ver la lista de
				elecciones, para poder generar algunos reportes como, ver los
				resultados, la lista de candidatos o la lista de votantes.
			</SectionDescription>

			<MessageHome />

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard action={ActionCard.home} />
		</>
	)
}

export default HomeAdmin
