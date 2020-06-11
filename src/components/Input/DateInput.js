import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const InputContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: inline-block;
	position: relative;
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

export default function DateInput({ name, label, onChange, value, min, max }) {
	return (
		<InputContainer>
			<Label htmlFor={name}>{label}</Label>
			<Input
				id={name}
				name={name}
				value={value}
				type="date"
				onChange={onChange}
				min={min}
				max={max}
			/>
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
}