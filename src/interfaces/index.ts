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
export interface UsersResponse {
	docs: UserInfo[]
	totalDocs: number
	limit: number
	totalPages: number
	page: number
	pagingCounter: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: null
	nextPage: null
}

export interface UserInfo {
	name: string
	lastName: string
	dni: string
	role: string
	state: boolean
	createdAt: Date
	uid: string
}

/* user */
