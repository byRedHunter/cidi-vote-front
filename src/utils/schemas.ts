import * as Yup from 'yup'

export const schemaLogin = Yup.object({
	dni: Yup.number().required('Ingrese su número de DNI').positive().integer(),
	password: Yup.string().required('Ingrese su contraseña'),
})

export const schemaCreateUser = Yup.object({
	dni: Yup.number().required('Ingrese su número de DNI').positive().integer(),
	name: Yup.string().required('Ingrese su nombre'),
	lastName: Yup.string().required('Ingrese su apellido'),
})

export const schemaElection = Yup.object({
	position: Yup.string().required('Ingrese el cargo de la elección'),
	description: Yup.string().required('Ingrese una breve descripción'),
})
