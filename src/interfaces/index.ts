import { RouteProps } from 'react-router'

/* --- router --- */
export interface PropRoute extends RouteProps {
	isAuthenticated: boolean
	component: any
}
/* --- router --- */
