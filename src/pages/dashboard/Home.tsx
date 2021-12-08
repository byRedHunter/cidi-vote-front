import HomeAdmin from '../../components/utils/HomeAdmin'
import HomeUser from '../../components/utils/HomeUser'
import { HomeWrapper } from '../../styles/pages/home'
import { ModalTitle } from '../../styles/utils'
import { useAuth } from '../../store/useAuth'

const Home = () => {
	const { userInfo } = useAuth((state) => state)

	return (
		<HomeWrapper>
			<ModalTitle>Reportes y Resultados</ModalTitle>

			{userInfo?.role === 'ADMIN_ROLE' ? (
				<HomeAdmin fullName={`${userInfo.name} ${userInfo.lastName}`} />
			) : (
				<HomeUser fullName={`${userInfo?.name} ${userInfo?.lastName}`} />
			)}
		</HomeWrapper>
	)
}

export default Home
