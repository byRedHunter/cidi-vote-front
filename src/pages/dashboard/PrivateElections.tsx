import React, { useEffect } from 'react'
import CardCandidate from '../../components/shared/CardCandidate'
import ElectionCard from '../../components/shared/ElectionCard'
import Loading from '../../components/shared/Loading'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { ActionCard } from '../../interfaces/enums'
import { useCandidates } from '../../store/useCandidates'
import { useElection } from '../../store/useElection'
import { MessageHomeCliente } from '../../styles/pages/home'
import {
	ListCandidates,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'

const MyElections = () => {
	const { candidates, loadingCandidates } = useCandidates((store) => store)
	const { userElections, getAllElectionsUser, loading } = useElection(
		(store) => store
	)

	useEffect(() => {
		if (userElections.length === 0) getAllElectionsUser()

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SectionTitle>Elecciones Privadas</SectionTitle>
			<SectionDescription>
				Empiece a votar, seleccione una elección y elija a su candidato
				favorito.
			</SectionDescription>

			{loading ? (
				<Loading />
			) : userElections.length > 0 ? (
				<>
					<SectionTitle>Lista de Elecciones</SectionTitle>

					{userElections.map((election) => (
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
