import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
	return (
		<Router>
			<main>
				<Switch>
					<PublicRoute
						exact
						path='/login'
						component={Login}
						isAuthenticated={true}
					/>

					<PrivateRoute
						path='/'
						component={DashboardRoutes}
						isAuthenticated={true}
					/>
				</Switch>
			</main>
		</Router>
	)
}

export default AppRouter
