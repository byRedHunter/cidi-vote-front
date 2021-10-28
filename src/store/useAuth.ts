import create, { GetState, SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { PropUser } from '../interfaces/index'

interface AuthStore {
	token: string
	auth: boolean
	userInfo: PropUser | null
	loginUser: () => void
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
				loginUser: async () => {
					set((state) => ({
						...state,
						token: 'd952d65dsgd585',
						auth: true,
					}))
				},
				registerUser: async () => {},
				verifyUser: async () => {
					const { state } = JSON.parse(
						sessionStorage.getItem('cidi-info') || ''
					)

					if (state.token) console.log(state.token)

					set((state) => ({
						...state,
						userInfo: {},
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
