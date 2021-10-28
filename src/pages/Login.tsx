import {
	LoginWrapper,
	FormLogin,
	LoginHeader,
	LoginBody,
} from '../styles/pages/login'
import { FormInput, Button } from '../styles/utils'
import { useAuth } from '../store/useAuth'
import { FormEvent } from 'react'
const Login = () => {
	const { loginUser } = useAuth((state) => state)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		loginUser()
	}

	return (
		<LoginWrapper>
			<FormLogin autoComplete='off' onSubmit={handleSubmit}>
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
