import create, { GetState, SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LoginProps, PropUser, User } from '../interfaces/index'
import { clientAxios, tokenAuth } from '../config/axios'
import { alert } from '../config/alert'

interface AuthStore {
	token: string
	auth: boolean
	userInfo: User | null
	loginUser: (infoLogin: LoginProps) => void
	verifyUser: () => void
	clearUser: (closeModal: () => void) => void
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

						tokenAuth(response.data.token)

						set((state) => ({
							...state,
							token: response.data.token,
							userInfo: response.data.user,
							auth: true,
						}))
					} catch (error) {
						console.log('LOGIN ERROR: ', error)
						alert.error('Credenciales incorrectas')
					}
				},
				verifyUser: async () => {
					const dataStorage = sessionStorage.getItem('cidi-info') || ''

					if (dataStorage !== '') {
						const { state: info } = JSON.parse(dataStorage)

						if (info.token) tokenAuth(info.token)

						if (info.user)
							set((state) => ({
								...state,
								userInfo: info.user,
								token: info.token,
								auth: true,
							}))
					}
				},
				clearUser: async (closeModal) => {
					sessionStorage.clear()

					set((state) => ({
						...state,
						token: '',
						auth: false,
						userInfo: null,
					}))

					closeModal()
				},
			}),
			{
				name: 'cidi-info',
				getStorage: () => sessionStorage,
			}
		)
	)
)
