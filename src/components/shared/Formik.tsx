import { ErrorMessage, Field } from 'formik'
import { FormCheck, FormInput } from '../../styles/utils'

interface InputProps {
	label: string
	name: string
	type: string
	value?: string
	id?: string
}

export const InputForm = ({ label, ...props }: InputProps) => {
	return (
		<FormInput>
			<label htmlFor={props.name}> {label} </label>
			<Field {...props} as={props.type === 'textarea' ? 'textarea' : ''} />
			<ErrorMessage className='error' name={props.name} component='p' />
		</FormInput>
	)
}

export const InputCheckbox = ({ label, ...props }: InputProps) => {
	return (
		<FormCheck>
			<label htmlFor={props.name}>{label}</label>
			<Field {...props} />
		</FormCheck>
	)
}
