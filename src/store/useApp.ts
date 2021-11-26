import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TypeAction } from '../interfaces/enums'

interface ActionParams {
	uid?: string
	typeAction: TypeAction
	message: string
}

interface ModalActionStore {
	showMenu: boolean
	isModalOpen: boolean
	doingAction: boolean
	typeAction: string
	uid: string
	message: string
	toggleMenu: () => void
	openModal: () => void
	closeModal: () => void
	openAction: (actions: ActionParams) => void
	closeAction: () => void
}

export const useApp = create(
	devtools(
		(
			set: SetState<ModalActionStore>,
			get: GetState<ModalActionStore>
		): ModalActionStore => ({
			showMenu: false,
			isModalOpen: false,
			doingAction: false,
			typeAction: '',
			uid: '',
			message: '',
			toggleMenu: () => {
				set((state) => ({
					...state,
					showMenu: !state.showMenu,
				}))
			},
			openModal: () => {
				set((state) => ({
					...state,
					isModalOpen: true,
				}))
			},
			closeModal: () => {
				set((state) => ({
					...state,
					isModalOpen: false,
				}))
			},
			openAction: (actions) => {
				set((state) => ({
					...state,
					doingAction: true,
					...actions,
				}))
			},
			closeAction: () => {
				set((state) => ({
					...state,
					doingAction: false,
					typeAction: '',
					uid: '',
				}))
			},
		})
	)
)
