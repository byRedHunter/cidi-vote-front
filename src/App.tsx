import AppRouter from './routes/AppRouter'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
	return (
		<>
			<AppRouter />
			<ToastContainer
				position='top-right'
				autoClose={3500}
				closeOnClick
				pauseOnFocusLoss
				pauseOnHover
				theme='colored'
			/>
		</>
	)
}

export default App
