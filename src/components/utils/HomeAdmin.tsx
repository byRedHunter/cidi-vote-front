import { ActionCard } from '../../interfaces/enums'
import { SectionDescription, SectionTitle } from '../../styles/utils'
import ElectionCard from '../shared/ElectionCard'
import MessageHome from './MessageHome'
import { useElection } from '../../store/useElection'
import { useEffect } from 'react'
import Loading from '../shared/Loading'
import ModalWrapper from '../shared/ModalWrapper'
import { PDFViewer } from '@react-pdf/renderer'
import CandidatesPDF from './CandidatesPDF'
import { useCandidates } from '../../store/useCandidates'
import VotersPDF from './VotersPDF'

interface HomeProps {
	fullName: string
}

const HomeAdmin = ({ fullName }: HomeProps) => {
	const { elections, getAllElections, loading } = useElection((state) => state)
	const { candidates, voters, loadingCandidates, position, type } =
		useCandidates((state) => state)

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

			{loading ? (
				<Loading />
			) : elections.length > 0 ? (
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

			<ModalWrapper>
				{loadingCandidates ? (
					<Loading />
				) : (
					<PDFViewer style={{ height: '80vh', width: '100%' }}>
						<>
							{type === 'candidates' && (
								<CandidatesPDF candidates={candidates} position={position} />
							)}
							{type === 'voters' && (
								<VotersPDF voters={voters} position={position} />
							)}
						</>
					</PDFViewer>
				)}
			</ModalWrapper>
		</>
	)
}

export default HomeAdmin
