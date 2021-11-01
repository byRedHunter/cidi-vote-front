import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { clientAxios } from '../config/axios'
import { UsersResponse, UserInfo } from '../interfaces/index'

interface UserStore {
	users: UserInfo[] | null
	getAllUsers: () => void
}

export const useUsers = create(
	devtools(
		(set: SetState<UserStore>, get: GetState<UserStore>): UserStore => ({
			users: null,
			getAllUsers: async () => {
				try {
					const response = await clientAxios.get<UsersResponse>('user')

					set((state) => ({
						...state,
						users: response.data.docs,
					}))
				} catch (error) {
					console.log(error)
				}
			},
		})
	)
)
