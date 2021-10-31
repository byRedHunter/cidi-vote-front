import create, { GetState, SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LoginProps, PropUser, User } from '../interfaces/index'
import { clientAxios, tokenAuth } from '../config/axios'

interface AuthStore {
	token: string
	auth: boolean
	userInfo: User | null
	loginUser: (infoLogin: LoginProps) => void
	registerUser: () => void
	verifyUser: () => void
	clearUser: () => void
}

export const useAuth = create(
	devtools(
		persist(
			(set: SetState<AuthStore>, get: GetState<AuthStore>): AuthStore => ({
				token: '',
				auth: false,
				userInfo: null,
				loginUser: async (infoLogin) => {
					try {
						const response = await clientAxios.post<PropUser>(
							'/auth/login',
							infoLogin
						)

						set((state) => ({
							...state,
							token: response.data.token,
							userInfo: response.data.user,
							auth: true,
						}))
					} catch (error) {
						console.log(error)
					}
				},
				registerUser: async () => {},
				verifyUser: async () => {
					const { state: dataStorage } = JSON.parse(
						sessionStorage.getItem('cidi-info') || ''
					)

					if (dataStorage.token) tokenAuth(dataStorage.token)

					if (dataStorage.user)
						set((state) => ({
							...state,
							userInfo: dataStorage.user,
							token: dataStorage.token,
							auth: true,
						}))
				},
				clearUser: async () => {
					sessionStorage.clear()

					set((state) => ({
						...state,
						token: '',
						auth: false,
						userInfo: null,
					}))
				},
			}),
			{
				name: 'cidi-info',
				getStorage: () => sessionStorage,
			}
		)
	)
)
