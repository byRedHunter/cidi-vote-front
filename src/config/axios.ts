import axios from 'axios'

export const clientAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
})

export const tokenAuth = (token: string) => {
	if (token) {
		clientAxios.defaults.headers.common['x-token'] = token
	} else {
		delete clientAxios.defaults.headers.common['x-token']
	}
}
