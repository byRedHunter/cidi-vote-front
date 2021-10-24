import { Redirect, Route, Switch } from 'react-router'
import IconMenu from '../components/shared/IconMenu'
import Navbar from '../components/shared/Navbar'

import Home from '../pages/dashboard/Home'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<section className='content-info'>
				<Switch>
					<Route exact path='/home' component={Home} />

					<Redirect to='home' />
				</Switch>
			</section>

			<IconMenu />
		</>
	)
}

export default DashboardRoutes
