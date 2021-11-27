import { devtools } from 'zustand/middleware'
import create, { GetState, SetState } from 'zustand'
import { UserInfo } from '../interfaces/index'
import { clientAxios } from '../config/axios'

interface CandidateStore {
	loadingCandidates: boolean
	loadingSearch: boolean
	candidates: UserInfo[] | null
	searchCAndidates: UserInfo[] | null
	getAllCandidates: (uidElection: string) => void
	getSearchCandidates: (term: string) => void
}

export const useCandidates = create(
	devtools(
		(
			set: SetState<CandidateStore>,
			get: GetState<CandidateStore>
		): CandidateStore => ({
			loadingCandidates: false,
			loadingSearch: false,
			candidates: null,
			searchCAndidates: null,
			getAllCandidates: async (uidElection: string) => {
				set((state) => ({ ...state, loadingCandidates: true }))

				const response = await clientAxios.get<UserInfo[]>(
					`/election/candidates/${uidElection}`
				)

				set((state) => ({
					...state,
					candidates: response.data,
					loadingCandidates: false,
				}))
			},
			getSearchCandidates: async (term: string) => {
				set((state) => ({
					...state,
					loadingSearch: true,
					searchCAndidates: null,
				}))

				const response = await clientAxios.get<UserInfo[]>(
					`/search/user/${term}`
				)

				set((state) => ({
					...state,
					searchCAndidates: response.data,
					loadingSearch: false,
				}))
			},
		})
	)
)
