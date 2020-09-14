import { useState } from 'react'

export default function useFormValidation(callback) {
	const [errors, setErrors] = useState({})

	function handleValidate(results) {
		setErrors(results)

		if (results) {
			let keys = Object.keys(results)

			document
				.querySelector(`#${keys[0]}`)
				.scrollIntoView({ behavior: 'smooth', block: 'center' })

			return
		}

		callback()
	}

	return [errors, handleValidate]
}
