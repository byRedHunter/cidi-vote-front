import { Redirect, Route } from 'react-router'
import { PropRoute } from '../interfaces/index'

const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}: PropRoute) => {
	return (
		<Route
			{...rest}
			component={(props: PropRoute) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	)
}

export default PrivateRoute
