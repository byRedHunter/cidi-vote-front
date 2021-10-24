import {
	LoginWrapper,
	FormLogin,
	LoginHeader,
	LoginBody,
} from '../styles/pages/login'
import { FormInput, Button } from '../styles/utils'
const Login = () => {
	return (
		<LoginWrapper>
			<FormLogin autoComplete='off'>
				<LoginHeader>
					<figure>
						<img src='/images/logo.svg' alt='CIDI logo' />
					</figure>
				</LoginHeader>

				<LoginBody>
					<FormInput>
						<label htmlFor='dni'>DNI</label>
						<input type='text' id='dni' />
					</FormInput>

					<FormInput>
						<label htmlFor='password'>Contraseña</label>
						<input type='password' id='password' />
					</FormInput>

					<Button type='submit'>Ingresar</Button>
				</LoginBody>
			</FormLogin>
		</LoginWrapper>
	)
}

export default Login
