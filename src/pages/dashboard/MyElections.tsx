import { useEffect } from 'react'
import { ActionCard } from '../../interfaces/enums'
import Loading from '../../components/shared/Loading'
import CardCandidate from '../../components/shared/CardCandidate'
import ModalWrapper from '../../components/shared/ModalWrapper'
import {
	ListCandidates,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
import { MessageHomeCliente } from '../../styles/pages/home'
import { useCandidates } from '../../store/useCandidates'
import { useElection } from '../../store/useElection'
import ElectionCard from '../../components/shared/ElectionCard'

const MyElections = () => {
	const { candidates, loadingCandidates } = useCandidates((store) => store)
	const { publicUserElections, getAllElectionsPublic, loading } = useElection(
		(store) => store
	)

	useEffect(() => {
		if (publicUserElections.length === 0) getAllElectionsPublic()

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SectionDescription>
				Empiece a votar, seleccione una elección y elija a su candidato
				favorito.
			</SectionDescription>

			{loading ? (
				<Loading />
			) : publicUserElections.length > 0 ? (
				<>
					<SectionTitle>Lista de Elecciones</SectionTitle>

					{publicUserElections.map((election) => (
						<ElectionCard
							key={election.uid}
							action={ActionCard.user}
							infoCard={election}
							type='public'
						/>
					))}
				</>
			) : (
				<MessageHomeCliente>
					<p>Aún no hay elecciones disponibles.</p>
				</MessageHomeCliente>
			)}

			<ModalWrapper>
				<ModalTitle>Emitir Voto</ModalTitle>
				<SectionDescription>
					Seleccione a su candidato favorito para emitir su voto.
				</SectionDescription>
				<SectionInfo>Candidatos</SectionInfo>
				{loadingCandidates ? (
					<Loading />
				) : candidates.length > 0 ? (
					<>
						<ListCandidates>
							{candidates.map((candidate) => (
								<CardCandidate
									key={candidate.uid}
									infoCandidate={candidate}
									user
								/>
							))}
						</ListCandidates>
					</>
				) : (
					<p>Esta eleccción no cuenta con candidatos.</p>
				)}
			</ModalWrapper>
		</>
	)
}

export default MyElections
