import { Formik } from 'formik'
import { schemaLogin } from '../utils/schemas'
import { alert } from '../config/alert'
import { useAuth } from '../store/useAuth'
import { LoginProps } from '../interfaces/index'
import {
	LoginWrapper,
	FormLogin,
	LoginHeader,
	LoginBody,
} from '../styles/pages/login'
import { Button } from '../styles/utils'
import { InputForm } from '../components/shared/Formik'

const Login = () => {
	const { loginUser } = useAuth((state) => state)
	const initialValues = {
		dni: '73109572',
		password: '73109572',
	}

	const handleSubmit = (values: LoginProps) => {
		if (String(values.dni).length !== 8)
			return alert.error('Ingrese un DNI válido')

		loginUser(values)
	}

	return (
		<LoginWrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={schemaLogin}
				onSubmit={(values) => handleSubmit(values)}
			>
				<FormLogin autoComplete='off'>
					<LoginHeader>
						<figure>
							<img src='/images/logo.svg' alt='CIDI logo' />
						</figure>
					</LoginHeader>

					<LoginBody>
						<InputForm name='dni' id='dni' label='DNI' type='number' />
						<InputForm
							name='password'
							id='password'
							label='Contraseña'
							type='password'
						/>

						<Button type='submit'>Ingresar</Button>
					</LoginBody>
				</FormLogin>
			</Formik>
		</LoginWrapper>
	)
}

export default Login
