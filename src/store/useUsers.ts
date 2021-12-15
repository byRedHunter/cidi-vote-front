import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { alert } from '../config/alert'
import { clientAxios } from '../config/axios'
import { UsersResponse, UserInfo, CreateUser } from '../interfaces/index'

interface UserStore {
	users: UserInfo[] | null
	page: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: number | null
	nextPage: number | null
	loading: boolean
	getAllUsers: () => void
	addNexPage: () => void
	restNexPage: () => void
	registerUser: (info: CreateUser, closeModal: () => void) => void
}

export const useUsers = create(
	devtools(
		(set: SetState<UserStore>, get: GetState<UserStore>): UserStore => ({
			users: null,
			page: 1,
			hasPrevPage: false,
			hasNextPage: false,
			prevPage: null,
			nextPage: null,
			loading: false,
			getAllUsers: async () => {
				try {
					set((state) => ({ ...state, loading: true }))
					const response = await clientAxios.get<UsersResponse>(
						`user?page=${get().page}`
					)

					set((state) => ({
						...state,
						users: response.data.docs,
						hasPrevPage: response.data.hasPrevPage,
						hasNextPage: response.data.hasNextPage,
						prevPage: response.data.prevPage,
						nextPage: response.data.nextPage,
						loading: false,
					}))
				} catch (error) {
					console.log(error)
				}
			},
			addNexPage: () => {
				if (!get().nextPage) return

				set((state) => ({
					...state,
					page: state.page + 1,
				}))
			},
			restNexPage: () => {
				if (!get().prevPage) return

				set((state) => ({
					...state,
					page: state.page - 1,
				}))
			},
			registerUser: async (info, closeModal) => {
				try {
					info.isAdmin ? (info.role = 'ADMIN_ROLE') : (info.role = 'USER_ROLE')
					delete info.isAdmin
					info.dni = String(info.dni)

					await clientAxios.post('/user', info)

					alert.success('Usuario Registrado')
					get().getAllUsers()
					closeModal()
				} catch (error) {
					console.log('Error create user: ', error)
					alert.error('Algo salio mal, verifique sus datos')
				}
			},
		})
	)
)
