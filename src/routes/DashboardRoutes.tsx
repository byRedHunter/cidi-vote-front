import { Redirect, Route, Switch } from 'react-router'
import IconMenu from '../components/shared/IconMenu'
import Navbar from '../components/shared/Navbar'
import Candidates from '../pages/dashboard/Candidates'
import Elections from '../pages/dashboard/Elections'

import Home from '../pages/dashboard/Home'
import Users from '../pages/dashboard/Users'
import Voters from '../pages/dashboard/Voters'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<section className='content-info'>
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/users' component={Users} />
					<Route exact path='/elections' component={Elections} />
					<Route exact path='/candidates' component={Candidates} />
					<Route exact path='/voters' component={Voters} />

					<Redirect to='home' />
				</Switch>
			</section>

			<IconMenu />
		</>
	)
}

export default DashboardRoutes
