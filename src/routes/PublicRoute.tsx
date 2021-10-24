import { Redirect, Route } from 'react-router'
import { PropRoute } from '../interfaces/index'

const PublicRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}: PropRoute) => {
	return (
		<Route
			{...rest}
			component={(routeProps: PropRoute) =>
				!isAuthenticated ? <Component {...routeProps} /> : <Redirect to='/' />
			}
		/>
	)
}

export default PublicRoute
