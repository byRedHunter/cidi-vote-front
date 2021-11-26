import ElectionCard from '../../components/shared/ElectionCard'
import ModalWrapper from '../../components/shared/ModalWrapper'
import { ActionCard } from '../../interfaces/enums'
import { ElectionsWrapper } from '../../styles/pages/elections'
import { useApp } from '../../store/useApp'
import { useElection } from '../../store/useElection'
import { useEffect } from 'react'
import { FormElectionProps } from '../../interfaces/index'
import {
	Button,
	ModalTitle,
	SectionDescription,
	SectionInfo,
	SectionTitle,
} from '../../styles/utils'
import { Form, Formik } from 'formik'
import { schemaElection } from '../../utils/schemas'
import { InputForm } from '../../components/shared/Formik'
import Loading from '../../components/shared/Loading'
const Elections = () => {
	const { openModal, closeModal, isModalOpen } = useApp((store) => store)
	const {
		elections,
		getAllElections,
		saveNewElection,
		clearState,
		editing,
		itemSelected,
		editElection,
		loading,
	} = useElection((store) => store)

	let initialValues = {
		position: 'Test',
		description: 'Test',
	}

	const handleSubmit = (values: FormElectionProps) => {
		if (editing && itemSelected) return editElection(itemSelected.uid, values)

		saveNewElection(values, closeModal)
	}

	useEffect(() => {
		if (elections.length === 0) getAllElections(0)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (!isModalOpen) clearState()
		// eslint-disable-next-line
	}, [isModalOpen])

	useEffect(() => {
		if (editing && itemSelected) {
			openModal()
		} else {
			closeModal()
		}
		// eslint-disable-next-line
	}, [editing, itemSelected])

	return (
		<ElectionsWrapper>
			<ModalTitle>Elecciones</ModalTitle>

			<SectionDescription>
				Bienvenido, a la sección de elecciones, aqui podra crear nuevas
				elecciones, ver las existentes y editarlos.
			</SectionDescription>

			{!loading && elections.length === 0 && (
				<SectionInfo>No tiene elecciones creadas, cree una.</SectionInfo>
			)}

			<Button onClick={openModal}>Crear Elección</Button>

			{loading && <Loading />}

			{elections.length > 0 && (
				<>
					<SectionTitle>Lista de Elecciones</SectionTitle>

					{elections.map((election) => (
						<ElectionCard
							key={election.uid}
							action={ActionCard.election}
							infoCard={election}
						/>
					))}
				</>
			)}

			<ModalWrapper>
				<ModalTitle>Crear Elección</ModalTitle>
				<SectionDescription>
					Asegurese de completar los campos requeridos.
				</SectionDescription>
				<Formik
					initialValues={
						!itemSelected
							? initialValues
							: {
									position: itemSelected.position,
									description: itemSelected.description,
							  }
					}
					validationSchema={schemaElection}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<InputForm
							label='Cargo'
							type='text'
							name='position'
							id='position'
						/>

						<InputForm
							label='Descripción'
							type='textarea'
							name='description'
							id='description'
						/>

						<Button type='submit'>{editing ? 'Editar' : 'Crear'} </Button>
					</Form>
				</Formik>
			</ModalWrapper>
		</ElectionsWrapper>
	)
}

export default Elections
