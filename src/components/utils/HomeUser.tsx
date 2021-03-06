import { useEffect } from 'react'
import { ActionCard } from '../../interfaces/enums'
import { SectionTitle, SectionDescription } from '../../styles/utils'
import { MessageHomeCliente } from '../../styles/pages/home'
import { useElection } from '../../store/useElection'
import Loading from '../shared/Loading'
import ElectionCard from '../shared/ElectionCard'
import { useCandidates } from '../../store/useCandidates'
import ModalWrapper from '../shared/ModalWrapper'
import Results from './Results'
import { PDFViewer } from '@react-pdf/renderer'
import CandidatesPDF from './CandidatesPDF'
import VotersPDF from './VotersPDF'

interface HomeProps {
	fullName: string
}

const HomeUser = ({ fullName }: HomeProps) => {
	const {
		userElections,
		publicUserElections,
		loading,
		getAllElectionsUser,
		getAllElectionsPublic,
	} = useElection((state) => state)

	const { candidates, voters, loadingCandidates, position, type, results } =
		useCandidates((state) => state)

	useEffect(() => {
		if (userElections.length === 0) getAllElectionsUser()

		if (publicUserElections.length === 0) getAllElectionsPublic()

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SectionDescription>
				Bienvenido {fullName}, esta es la sección de resultados, aqui podras ver
				la lista de elecciones, para poder generar algunos reportes como, ver
				los resultados, la lista de candidatos o la lista de votantes.
			</SectionDescription>

			{loading && <Loading />}

			{userElections.length > 0 || publicUserElections.length > 0 ? (
				<>
					<SectionTitle>Lista de Elecciones</SectionTitle>

					{userElections.map((election) => (
						<ElectionCard
							key={election.uid}
							action={ActionCard.home}
							infoCard={election}
						/>
					))}

					{publicUserElections.map((election) => (
						<ElectionCard
							key={election.uid}
							action={ActionCard.home}
							infoCard={election}
						/>
					))}
				</>
			) : (
				<MessageHomeCliente>
					<p>Aún no hay elecciones disponibles.</p>

					<figure>
						<img src='/images/logo.svg' alt='CIDI logo' />
					</figure>
				</MessageHomeCliente>
			)}

			<ModalWrapper>
				{loadingCandidates ? (
					<Loading />
				) : type === 'results' ? (
					<Results results={results} position={position} />
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

export default HomeUser
