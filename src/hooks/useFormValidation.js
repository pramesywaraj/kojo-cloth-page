import { useState } from 'react'

export default function useFormValidation(values, validator) {
	const [errors, setErrors] = useState({})

	function handleValidate() {
		setErrors(validator())
	}

	return [errors, handleValidate]
}
