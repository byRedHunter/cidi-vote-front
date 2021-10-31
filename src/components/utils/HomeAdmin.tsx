import { ActionCard } from '../../interfaces/enums'
import { SectionDescription, SectionTitle } from '../../styles/utils'
import ElectionCard from '../shared/ElectionCard'
import MessageHome from './MessageHome'
import { useElection } from '../../store/useElection'

interface HomeProps {
	fullName: string
}

const HomeAdmin = ({ fullName }: HomeProps) => {
	const { elections } = useElection((state) => state)

	return (
		<>
			<SectionDescription>
				Bienvenido {fullName}, esta es la sección de resultados, aqui podras ver
				la lista de elecciones, para poder generar algunos reportes como, ver
				los resultados, la lista de candidatos o la lista de votantes.
			</SectionDescription>

			{elections.length > 0 ? (
				<>
					<SectionTitle>Lista de Elecciones</SectionTitle>

					<ElectionCard action={ActionCard.home} />
				</>
			) : (
				<MessageHome />
			)}
		</>
	)
}

export default HomeAdmin
