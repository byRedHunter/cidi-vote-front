import * as Yup from 'yup'

export const schemaLogin = Yup.object({
	dni: Yup.number().required('Ingrese su número de DNI').positive().integer(),
	password: Yup.string().required('Ingrese su contraseña'),
})
