import { RouteProps } from 'react-router'

/* --- router --- */
export interface PropRoute extends RouteProps {
	isAuthenticated: boolean
	component: any
}
/* --- router --- */

/* user */
export interface PropUser {
	user: User
	token: string
}
export interface User {
	name: string
	lastName: string
	dni: string
	role: string
	state: boolean
	createdAt: Date
	uid: string
}
export interface LoginProps {
	dni: string
	password: string
}
/* user */
