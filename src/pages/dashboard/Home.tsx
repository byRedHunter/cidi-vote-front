import ElectionCard from '../../components/shared/ElectionCard'
import MessageHome from '../../components/utils/MessageHome'
import { HomeWrapper } from '../../styles/pages/home'
import { SectionDescription, SectionTitle } from '../../styles/utils'
const Home = () => {
	return (
		<HomeWrapper>
			<SectionDescription>
				Bienvenido, a la sección de resultados, aqui podras ver la lista de
				elecciones, para poder generar algunos reportes como, ver los
				resultados, la lista de candidatos o la lista de votantes.
			</SectionDescription>

			<MessageHome />

			<SectionTitle>Lista de Elecciones</SectionTitle>

			<ElectionCard />
			<ElectionCard />
			<ElectionCard />
			<ElectionCard />
			<ElectionCard />
			<ElectionCard />
			<ElectionCard />
		</HomeWrapper>
	)
}

export default Home
