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
	image?: string
}
export interface CreateUser {
	dni: string
	name: string
	lastName: string
	isAdmin?: boolean
	password?: string
	role?: string
}
/* user */

/* elections */
export interface ElectionInfo {
	uid: string
	position: string
	description: string
	state: boolean
	private: boolean
}
export interface FormElectionProps {
	position: string
	description: string
}
/* elections */
