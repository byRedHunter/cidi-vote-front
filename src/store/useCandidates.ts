import { devtools } from 'zustand/middleware'
import create, { GetState, SetState } from 'zustand'
import { UserInfo } from '../interfaces/index'
import { clientAxios } from '../config/axios'
import { alert } from '../config/alert'

interface CandidateStore {
	loadingCandidates: boolean
	loadingSearch: boolean
	candidates: UserInfo[]
	searchCAndidates: UserInfo[]
	electionSelected: string
	getAllCandidates: (uidElection: string) => void
	getSearchCandidates: (term: string) => void
	addCandidate: (uid: string) => void
	removeCandidate: (uid: string) => void
	addVoter: (uid: string) => void
	selectElection: (uid: string) => void
	clearState: () => void
}

export const useCandidates = create(
	devtools(
		(
			set: SetState<CandidateStore>,
			get: GetState<CandidateStore>
		): CandidateStore => ({
			loadingCandidates: false,
			loadingSearch: false,
			candidates: [],
			searchCAndidates: [],
			electionSelected: '',
			getAllCandidates: async (uidElection: string) => {
				set((state) => ({ ...state, loadingCandidates: true }))

				const response = await clientAxios.get<UserInfo[]>(
					`/election/candidates/${uidElection}`
				)

				set((state) => ({
					...state,
					candidates: response.data,
					loadingCandidates: false,
					electionSelected: uidElection,
				}))
			},
			getSearchCandidates: async (term: string) => {
				set((state) => ({
					...state,
					loadingSearch: true,
					searchCAndidates: [],
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
			addCandidate: async (uid) => {
				try {
					await clientAxios.put(
						`/election/candidate/${get().electionSelected}`,
						{ userId: uid }
					)
					get().getAllCandidates(get().electionSelected)

					alert.success('Candidato agregado')
				} catch (error) {
					alert.error('Este candidato ya existe')
				}
			},
			removeCandidate: async (uid) => {
				try {
					await clientAxios.put(
						`/election/candidate/remove/${get().electionSelected}`,
						{ userId: uid }
					)
					get().getAllCandidates(get().electionSelected)

					alert.success('Candidato eliminado')
				} catch (error) {
					alert.error('Error inesperado al eliminar candidato')
				}
			},
			addVoter: async (uid) => {
				try {
					await clientAxios.put(`/election/voters/${get().electionSelected}`, {
						userId: uid,
					})

					alert.success('Votante agregado')
				} catch (error) {
					alert.error('Este persona ya ha sido agregado')
				}
			},
			selectElection: async (uid) => {
				set((state) => ({
					...state,
					electionSelected: uid,
				}))
			},
			clearState: () => {
				set((state) => ({
					...state,
					loadingCandidates: false,
					loadingSearch: false,
					searchCAndidates: [],
				}))
			},
		})
	)
)
