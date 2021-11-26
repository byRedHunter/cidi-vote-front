import { ActionCard } from '../../interfaces/enums'
import { SectionDescription, SectionTitle } from '../../styles/utils'
import ElectionCard from '../shared/ElectionCard'
import MessageHome from './MessageHome'
import { useElection } from '../../store/useElection'
import { useEffect } from 'react'

interface HomeProps {
	fullName: string
}

const HomeAdmin = ({ fullName }: HomeProps) => {
	const { elections, getAllElections } = useElection((state) => state)

	useEffect(() => {
		if (elections.length === 0) getAllElections(0)

		// eslint-disable-next-line
	}, [])

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

					{elections.map((election) => (
						<ElectionCard
							key={election.uid}
							action={ActionCard.home}
							infoCard={election}
						/>
					))}
				</>
			) : (
				<MessageHome />
			)}
		</>
	)
}

export default HomeAdmin
