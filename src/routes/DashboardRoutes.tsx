import { Redirect, Route, Switch } from 'react-router'
import IconMenu from '../components/shared/IconMenu'
import ModalAction from '../components/shared/ModalAction'
import Navbar from '../components/shared/Navbar'
import Candidates from '../pages/dashboard/Candidates'
import Elections from '../pages/dashboard/Elections'

import Home from '../pages/dashboard/Home'
import MyElections from '../pages/dashboard/MyElections'
import Perfil from '../pages/dashboard/Perfil'
import Users from '../pages/dashboard/Users'
import Voters from '../pages/dashboard/Voters'
import { useAuth } from '../store/useAuth'

const DashboardRoutes = () => {
	const { userInfo } = useAuth((store) => store)

	return (
		<>
			<Navbar />

			<section className='content-info'>
				<Switch>
					<Route exact path='/home' component={Home} />

					<Route exact path='/vote' component={MyElections} />

					<Route exact path='/users' component={Users} />

					<Route exact path='/elections' component={Elections} />

					<Route exact path='/candidates' component={Candidates} />

					<Route exact path='/voters' component={Voters} />

					<Route exact path='/perfil' component={Perfil} />

					<Redirect to='home' />
				</Switch>
			</section>

			<IconMenu />

			<ModalAction />
		</>
	)
}

export default DashboardRoutes
