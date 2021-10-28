import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useAuth } from '../store/useAuth'
import { useEffect } from 'react'

const AppRouter = () => {
	const { auth, token, verifyUser } = useAuth((state) => state)

	useEffect(() => {
		if (token) verifyUser()
		// eslint-disable-next-line
	}, [token])

	return (
		<Router>
			<main>
				<Switch>
					<PublicRoute
						exact
						path='/login'
						component={Login}
						isAuthenticated={auth}
					/>

					<PrivateRoute
						path='/'
						component={DashboardRoutes}
						isAuthenticated={auth}
					/>
				</Switch>
			</main>
		</Router>
	)
}

export default AppRouter
