import HomeAdmin from '../../components/utils/HomeAdmin'
import HomeUser from '../../components/utils/HomeUser'
import { HomeWrapper } from '../../styles/pages/home'

const Home = () => {
	return (
		<HomeWrapper>
			<HomeAdmin />

			<HomeUser />
		</HomeWrapper>
	)
}

export default Home
