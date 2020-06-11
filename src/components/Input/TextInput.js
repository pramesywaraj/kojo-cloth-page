import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const InputContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: inline-block;
	position: relative;

	&::after {
		position: absolute;
		top: 33px;
		right: 1em;
	}

	&::after {
		content: '${(props) => props.suffix}';
	}
`

const Label = styled.label`
	float: left;
	margin-bottom: 1vh;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
`

const Input = styled.input`
	width: 100%;
	min-height: 20px;
	padding: 10px;
	border: 1.5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;

	&:focus {
		outline: none;
	}
`

const TextAreaInput = styled.textarea`
	width: 100%;
	min-height: 100px;
	padding: 10px;
	border: 1.5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;

	&:focus {
		outline: none;
	}
`

export function TextInput({
	name,
	placeholder,
	type = 'text',
	label,
	onChange,
	value,
	unit,
}) {
	return (
		<InputContainer suffix={unit}>
			<Label htmlFor={name}>{label}</Label>
			<Input
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
			/>
		</InputContainer>
	)
}

export function TextArea({ name, placeholder, label, onChange, value }) {
	return (
		<InputContainer>
			<Label htmlFor={name}>{label}</Label>
			<TextAreaInput
				rows="4"
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</InputContainer>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	unit: PropTypes.string,
}

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
}
