import { Search } from 'react-ionicons'
import { Link } from 'react-router-dom'
import ElectionCard from '../../components/shared/ElectionCard'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { ActionCard } from '../../interfaces/enums'
import { CandidatesWrapper } from '../../styles/pages/candidates'
import { Button, ListCandidates, UlGrid } from '../../styles/utils'
import {
	FormInput,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
import CardCandidate from '../../components/shared/CardCandidate'
import UserModal from '../../components/utils/UserModal'
import { useElection } from '../../store/useElection'
import { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import Loading from '../../components/shared/Loading'
import { useCandidates } from '../../store/useCandidates'
import { alert } from '../../config/alert'

const Candidates = () => {
	const [openSearch, setOpenSearch] = useState<boolean>(false)
	const [search, setSearch] = useState('')

	const { elections, getAllElections, loading } = useElection((store) => store)
	const {
		loadingCandidates,
		candidates,
		loadingSearch,
		getSearchCandidates,
		searchCAndidates,
	} = useCandidates((store) => store)

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (search !== '') return getSearchCandidates(search)

		return alert.warning('Ingrese un término para buscar')
	}

	useEffect(() => {
		if (elections.length === 0) getAllElections(0)
		// eslint-disable-next-line
	}, [])

	return (
		<CandidatesWrapper>
			<ModalTitle>Candidatos</ModalTitle>

			<SectionDescription>
				En esta sección, Ud. podra agregar candidatos a una Elección.
			</SectionDescription>

			{!loading && elections.length === 0 && (
				<>
					<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>

					<Link to='/elections' className='button-link'>
						Crear Elección
					</Link>
				</>
			)}

			<SectionTitle>Lista de Elecciones</SectionTitle>

			{loading ? (
				<Loading />
			) : (
				elections.map((election) => (
					<ElectionCard action={ActionCard.candidates} infoCard={election} />
				))
			)}

			<ModalWrapper>
				<ModalTitle>Agregar Candidatos</ModalTitle>
				<SectionDescription>
					Busque un usuario por DNI, nombre o apellido para agregarlo como
					candidato.
				</SectionDescription>

				<Button onClick={() => setOpenSearch(true)} disabled={openSearch}>
					Nuevo Candidato
				</Button>

				{openSearch ? (
					<>
						<form style={{ marginTop: '2rem' }} onSubmit={handleSearch}>
							<FormInput>
								<label htmlFor='search'>Buscar</label>
								<input
									type='search'
									id='search'
									name='search'
									value={search}
									onChange={({ target }) => setSearch(target.value)}
								/>
								<button type='submit' className='icon'>
									<Search />
								</button>
							</FormInput>
						</form>

						<SectionInfo>Resultados</SectionInfo>
						<UlGrid>
							<li>
								<span>Foto</span>
								<span>Nombres</span>
								<span>Acciones</span>
							</li>

							{loadingSearch && <Loading />}

							{searchCAndidates && searchCAndidates?.length > 0 ? (
								searchCAndidates?.map((candidate) => (
									<UserModal key={candidate.uid} infoCandidate={candidate} />
								))
							) : (
								<p>No hay coincidencias</p>
							)}
						</UlGrid>
					</>
				) : (
					<></>
				)}

				<SectionInfo>Candidatos</SectionInfo>
				<ListCandidates>
					{loadingCandidates ? (
						<Loading />
					) : (
						candidates?.map((candidate) => (
							<CardCandidate key={candidate.uid} infoCandidate={candidate} />
						))
					)}
				</ListCandidates>
			</ModalWrapper>
		</CandidatesWrapper>
	)
}

export default Candidates
