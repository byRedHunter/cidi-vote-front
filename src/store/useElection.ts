import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'

export const useElection = create(
	devtools(
		combine(
			{
				elections: [],
			},
			(set, get) => ({})
		)
	)
)
