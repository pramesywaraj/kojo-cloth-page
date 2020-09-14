import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ErrorMessage } from 'components/Message/Message'

const InputContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: ${({ isShown }) => (isShown ? 'inline-block' : 'none')};
	position: relative;

	text-align: initial;
`

const Label = styled.label`
	display: block;
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
const DatePlaceholder = styled.p`
	font-weight: 400;
	font-size: 0.8rem;
	margin: 1vh 0;
`

export default function DateInput({
	name,
	label,
	onChange,
	value,
	min,
	max,
	placeholder,
	isShown,
	required,
	error,
}) {
	return (
		<InputContainer isShown={isShown}>
			<Label htmlFor={name}>{label}</Label>
			<Input
				id={name}
				name={name}
				value={value}
				type="date"
				onChange={onChange}
				min={min}
				max={max}
				required={required}
			/>
			{placeholder && <DatePlaceholder>{placeholder}</DatePlaceholder>}
			{error && <ErrorMessage message={error} isCentered={false} />}
		</InputContainer>
	)
}

DateInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	min: PropTypes.string,
	max: PropTypes.string,
	placeholder: PropTypes.string,
	isShown: PropTypes.bool,
	required: PropTypes.bool,
	error: PropTypes.string,
}

DateInput.defaultProps = {
	isShown: true,
	required: true,
}
