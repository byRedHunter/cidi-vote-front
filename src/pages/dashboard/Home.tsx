import HomeAdmin from '../../components/utils/HomeAdmin'
import HomeUser from '../../components/utils/HomeUser'
import { HomeWrapper } from '../../styles/pages/home'
import { ModalTitle } from '../../styles/utils'

const Home = () => {
	return (
		<HomeWrapper>
			<ModalTitle>Reportes y Resultados</ModalTitle>

			<HomeAdmin />

			<HomeUser />
		</HomeWrapper>
	)
}

export default Home
