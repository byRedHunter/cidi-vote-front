import { ErrorMessage, Field } from 'formik'
import { FormInput } from '../../styles/utils'

interface InputProps {
	label: string
	name: string
	type: string
	id?: string
}

export const InputForm = ({ label, ...props }: InputProps) => {
	return (
		<FormInput>
			<label htmlFor={props.name}> {label} </label>
			<Field {...props} />
			<ErrorMessage className='error' name={props.name} component='p' />
		</FormInput>
	)
}
