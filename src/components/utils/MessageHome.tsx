import { MessageHomeWrapper } from '../../styles/pages/home'
import { Link } from 'react-router-dom'

const MessageHome = () => {
	return (
		<MessageHomeWrapper>
			<p>
				Aun no hay elecciones. Para ver los resultados, debe de crear una
				eleccion.
			</p>
			<Link to='/elections'>Crear Elección</Link>
		</MessageHomeWrapper>
	)
}

export default MessageHome
