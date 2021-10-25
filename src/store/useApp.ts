import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'

export const useApp = create(
	devtools(
		combine(
			{
				showMenu: false,
				isModalOpen: false,
			},
			(set, get) => ({
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
			})
		)
	)
)
