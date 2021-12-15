import { Redirect, Route, Switch } from 'react-router'
import IconMenu from '../components/shared/IconMenu'
import ModalAction from '../components/shared/ModalAction'
import Navbar from '../components/shared/Navbar'

import Home from '../pages/dashboard/Home'
import Elections from '../pages/dashboard/Elections'
import Candidates from '../pages/dashboard/Candidates'
import MyElections from '../pages/dashboard/MyElections'
import PrivateElections from '../pages/dashboard/PrivateElections'
import Perfil from '../pages/dashboard/Perfil'
import Users from '../pages/dashboard/Users'
import Voters from '../pages/dashboard/Voters'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<section className='content-info'>
				<Switch>
					<Route exact path='/home' component={Home} />

					<Route exact path='/vote/public' component={MyElections} />

					<Route exact path='/vote/private' component={PrivateElections} />

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
