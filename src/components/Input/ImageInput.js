import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const InputContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: ${({ isShown }) => (isShown ? 'inline-block' : 'none')};
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

export default function ImageInput({
	name,
	placeholder,
	label,
	onChange,
	children,
	isShown,
}) {
	return (
		<InputContainer isShown={isShown}>
			<Label htmlFor={name}>{label}</Label>
			<Input
				id={name}
				name={name}
				placeholder={placeholder}
				type="file"
				onChange={onChange}
				accept="image/*"
			/>
			{children}
		</InputContainer>
	)
}

ImageInput.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.node,
	isShown: PropTypes.bool,
}

ImageInput.defaultProps = {
	isShown: true,
}
