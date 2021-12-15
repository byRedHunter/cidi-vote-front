import { toast } from 'react-toastify'

export const alert = {
	error: (message: string) => {
		toast(message, { type: 'error' })
	},
	success: (message: string) => {
		toast(message, { type: 'success' })
	},
	info: (message: string) => {
		toast(message, { type: 'info' })
	},
	warning: (message: string) => {
		toast(message, { type: 'warning' })
	},
}
