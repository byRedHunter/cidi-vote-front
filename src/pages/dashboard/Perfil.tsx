import Image from '../../components/shared/Image'
import { useAuth } from '../../store/useAuth'
import {
	Button,
	FormInput,
	SectionDescription,
	SectionTitle,
} from '../../styles/utils'
import {
	ChangeImage,
	SectionSubTitle,
	PerfilWrapper,
} from '../../styles/pages/perfil'
import { FormEvent, useState } from 'react'

const Perfil = () => {
	const { userInfo, changePassword } = useAuth((state) => state)

	const [password, setPassword] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		changePassword(password, userInfo?.uid || '')
		setPassword('')
	}

	return (
		<PerfilWrapper>
			{userInfo ? (
				<>
					<SectionTitle>
						Hola, {`${userInfo?.name} ${userInfo?.lastName}`}
					</SectionTitle>

					<SectionDescription>
						Es esta sección podras actualizar tus información.
					</SectionDescription>

					<SectionSubTitle>Perfil</SectionSubTitle>
					<ChangeImage>
						<Image
							src={userInfo?.image}
							alt={`${userInfo?.name} ${userInfo?.lastName}`}
						/>
						<input type='file' />
						{/* <Button type='button'>Editar</Button> */}
					</ChangeImage>

					<SectionSubTitle>Datos Personales</SectionSubTitle>
					<form>
						<FormInput>
							<label htmlFor='dni'>DNI</label>
							<input
								type='text'
								id='dni'
								value={userInfo.dni}
								disabled={false}
							/>
						</FormInput>
						<FormInput>
							<label htmlFor='name'>Nombres</label>
							<input
								type='text'
								id='name'
								value={userInfo.name}
								disabled={false}
							/>
						</FormInput>
						<FormInput>
							<label htmlFor='lastName'>Apellidos</label>
							<input
								type='text'
								id='lastName'
								value={userInfo.lastName}
								disabled={false}
							/>
						</FormInput>

						{/* <Button type='submit'>Guardar Datos</Button> */}
					</form>

					<SectionSubTitle>Seguridad</SectionSubTitle>
					<form onSubmit={handleSubmit}>
						<FormInput>
							<label htmlFor='password'>Nueva Contraseña</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={({ target }) => setPassword(target.value)}
							/>
						</FormInput>

						<Button type='submit'>Cambiar Contraseña</Button>
					</form>
				</>
			) : (
				<SectionSubTitle>No hay informacion del usuario</SectionSubTitle>
			)}
		</PerfilWrapper>
	)
}

export default Perfil
