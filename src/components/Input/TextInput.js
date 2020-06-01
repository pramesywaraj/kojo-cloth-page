import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const InputContainer = styled.div`
	width: auto;
	height: auto;
	margin: 2vh 0;

	display: block;

	label {
		float: left;
		margin-bottom: 1vh;
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 600;
	}

	input {
		width: 100%;
		min-height: 20px;
		padding: 10px;
		border: 1.5px solid ${({ theme }) => theme.colors.primary};
		border-radius: 8px;

		&:focus {
			outline: none;
		}
	}
`

export default function TextInput({
	name,
	placeholder,
	type,
	label,
	onChange,
	value,
}) {
	return (
		<InputContainer>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				type={type}
				onChange={(e) => onChange(e)}
			/>
		</InputContainer>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
}
