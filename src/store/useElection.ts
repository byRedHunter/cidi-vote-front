import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { alert } from '../config/alert'
import { clientAxios } from '../config/axios'
import { ElectionInfo } from '../interfaces'
import { FormElectionProps } from '../interfaces/index'

interface ElectionStore {
	elections: ElectionInfo[]
	itemSelected: null | ElectionInfo
	editing: boolean
	deleting: boolean
	getAllElections: (state: number) => void
	saveNewElection: (
		infoElection: FormElectionProps,
		closeModal: () => void
	) => void
	editElection: (uid: string, infoElection: FormElectionProps) => void
	selectItemToEdit: (data: ElectionInfo) => void
	closeElection: (uid: string) => void
	openElection: (uid: string) => void
	deleteElection: (uid: string) => void
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
			deleting: false,
			getAllElections: async (state) => {
				const response = await clientAxios.get<ElectionInfo[]>(
					`/election?state=${state}`
				)

				set((state) => ({
					...state,
					elections: response.data,
				}))
			},
			saveNewElection: async (infoElection, closeModal) => {
				try {
					await clientAxios.post('/election', infoElection)
					get().getAllElections(0)

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
			editElection: async (uid, infoElection) => {
				try {
					await clientAxios.put(`/election/${uid}`, infoElection)
					get().getAllElections(0)

					alert.success('Datos actualizado')

					set((state) => ({
						...state,
						editing: false,
						itemSelected: null,
					}))
				} catch (error) {
					alert.error('Error inesperado al actualizar datos')
				}
			},
			closeElection: async (uid) => {
				try {
					await clientAxios.put(`/election/close/${uid}`)
					get().getAllElections(0)

					alert.success('Elección cerrada, ya no podran votar')
				} catch (error) {
					alert.error('Error inesperado al cerrar la elección')
				}
			},
			openElection: async (uid) => {
				try {
					await clientAxios.put(`/election/open/${uid}`)
					get().getAllElections(0)

					alert.success('Elección abierta, ya podran votar')
				} catch (error) {
					alert.error('Error inesperado al reabrir la elección')
				}
			},
			deleteElection: async (uid) => {
				try {
					await clientAxios.delete(`/election/delete/${uid}`)
					get().getAllElections(0)

					alert.success('Elección eliminada')
				} catch (error) {
					alert.error('Error inesperado al eliminar la elección')
				}
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
