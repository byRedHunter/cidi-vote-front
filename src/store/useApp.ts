import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'

export const useApp = create(
	devtools(
		combine(
			{
				showMenu: false,
			},
			(set, get) => ({
				toggleMenu: () => {
					set((state) => ({
						...state,
						showMenu: !state.showMenu,
					}))
				},
			})
		)
	)
)
