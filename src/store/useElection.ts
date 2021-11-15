import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { alert } from '../config/alert'
import { clientAxios } from '../config/axios'
import { ElectionInfo } from '../interfaces'

interface ElectionStore {
	elections: ElectionInfo[]
	itemSelected: null | ElectionInfo
	editing: boolean
	getAllElections: () => void
	saveNewElection: (infoElection: ElectionInfo, closeModal: () => void) => void
	selectItemToEdit: (data: ElectionInfo) => void
	clearState: () => void
}

export const useElection = create(
	devtools(
		(
			set: SetState<ElectionStore>,
			get: GetState<ElectionStore>
		): ElectionStore => ({
			elections: [],
			itemSelected: null,
			editing: false,
			getAllElections: async () => {
				const response = await clientAxios.get<ElectionInfo[]>('/election')

				set((state) => ({
					...state,
					elections: response.data,
				}))
			},
			saveNewElection: async (infoElection, closeModal) => {
				try {
					await clientAxios.post('/election', infoElection)
					get().getAllElections()

					alert.success('Elección creada con exito')
				} catch (error) {
					alert.error('Error al crear una elección')
				}

				closeModal()
			},
			selectItemToEdit: (data) => {
				set((state) => ({
					...state,
					itemSelected: data,
					editing: true,
				}))
			},
			clearState: () => {
				set((state) => ({
					...state,
					itemSelected: null,
					editing: false,
				}))
			},
		})
	)
)
