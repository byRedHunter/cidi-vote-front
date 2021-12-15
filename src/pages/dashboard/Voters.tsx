import { Link } from 'react-router-dom'
import ElectionCard from '../../components/shared/ElectionCard'
import ModalWrapper from '../../components/shared/ModalWrapper'
import UserModal from '../../components/utils/UserModal'
import { ActionCard } from '../../interfaces/enums'
import { VotersWrapper } from '../../styles/pages/voter'
import { FormInput, ModalTitle, UlGrid } from '../../styles/utils'
import { useElection } from '../../store/useElection'
import {
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
import { FormEvent, useEffect, useState } from 'react'
import Loading from '../../components/shared/Loading'
import { useCandidates } from '../../store/useCandidates'
import { alert } from '../../config/alert'
import { Search } from 'react-ionicons'

const Voters = () => {
	const [search, setSearch] = useState('')

	const { publicElections, getPrivateElections, loading } = useElection(
		(store) => store
	)
	const { searchCAndidates, getSearchCandidates, loadingSearch } =
		useCandidates((store) => store)

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (search !== '') return getSearchCandidates(search)

		return alert.warning('Ingrese un término para buscar')
	}

	useEffect(() => {
		getPrivateElections()
		// eslint-disable-next-line
	}, [])

	return (
		<VotersWrapper>
			<ModalTitle>Votantes</ModalTitle>

			<SectionDescription>
				En esta seccion, Ud. podra agregar los votantes a una determinada
				elección.
			</SectionDescription>

			{!loading && publicElections.length === 0 && (
				<>
					<SectionInfo>No hay elecciones públicas, cree una.</SectionInfo>

					<Link to='/elections' className='button-link'>
						Crear Elección
					</Link>
				</>
			)}

			{loading ? (
				<Loading />
			) : (
				<>
					{publicElections.length > 0 && (
						<>
							<SectionTitle>Lista de Elecciones</SectionTitle>

							{publicElections.map((election) => (
								<ElectionCard
									key={election.uid}
									action={ActionCard.voters}
									infoCard={election}
								/>
							))}
						</>
					)}
				</>
			)}

			<ModalWrapper>
				<ModalTitle>Agregar Votantes</ModalTitle>
				<SectionDescription>
					Seleccione a los votantes, o puede filtrarlos por DNI, apellidos o
					nombres.
				</SectionDescription>

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

				<SectionInfo>Lista de Usuarios</SectionInfo>
				<UlGrid>
					<li>
						<span>Foto</span>
						<span>Nombres</span>
						<span>Acciones</span>
					</li>

					{loadingSearch && <Loading />}

					{searchCAndidates.length > 0 ? (
						searchCAndidates?.map((candidate) => (
							<UserModal key={candidate.uid} infoCandidate={candidate} />
						))
					) : (
						<p>No hay coincidencias</p>
					)}
				</UlGrid>
			</ModalWrapper>
		</VotersWrapper>
	)
}

export default Voters
