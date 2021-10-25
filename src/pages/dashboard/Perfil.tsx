import Image from '../../components/shared/Image'
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

const Perfil = () => {
	return (
		<PerfilWrapper>
			<SectionTitle>Hola, Jhon Michael</SectionTitle>

			<SectionDescription>
				Es esta sección podras actualizar tus información.
			</SectionDescription>

			<SectionSubTitle>Perfil</SectionSubTitle>
			<ChangeImage>
				<Image
					src='https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg'
					alt='Nombre del usuario'
				/>
				<input type='file' />
				<Button type='button'>Editar</Button>
			</ChangeImage>

			<SectionSubTitle>Datos Personales</SectionSubTitle>
			<form>
				<FormInput>
					<label htmlFor='dni'>DNI</label>
					<input type='text' id='dni' />
				</FormInput>
				<FormInput>
					<label htmlFor='name'>Nombres</label>
					<input type='text' id='name' />
				</FormInput>
				<FormInput>
					<label htmlFor='lastName'>Apellidos</label>
					<input type='text' id='lastName' />
				</FormInput>

				<Button type='submit'>Guardar Datos</Button>
			</form>

			<SectionSubTitle>Seguridad</SectionSubTitle>
			<form>
				<FormInput>
					<label htmlFor='password'>Nueva Contraseña</label>
					<input type='password' id='password' />
				</FormInput>

				<Button type='submit'>Proteger Cuenta</Button>
			</form>
		</PerfilWrapper>
	)
}

export default Perfil
