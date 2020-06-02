import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const SelectContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: block;
`

const Label = styled.label`
	float: left;
	margin-bottom: 1vh;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
`

const SelectInput = styled.select`
	width: 100%;
	min-height: 20px;
	padding: 10px;
	border: 1.5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;

	&:focus {
		outline: none;
	}
`

export default function Select({ name, placeholder, label, onChange, value }) {
	return (
		<SelectContainer>
			<Label htmlFor={name}>{label}</Label>
			<SelectInput id={name} name={name} onChange={onChange} value={value}>
				<option>{placeholder}</option>
			</SelectInput>
		</SelectContainer>
	)
}

Select.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
}
