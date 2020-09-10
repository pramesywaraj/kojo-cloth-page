import React from 'react'
import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'

const InputContainer = styled.div`
	width: 100%;
	height: auto;
	margin: 1.5vh 0;

	display: ${(props) => (props.isShown ? 'inline-block' : 'none')};
	text-align: initial;
`

const Container = styled.div`
	position: relative;
	width: auto;
	height: auto;

	&::after {
		content: '${(props) => props.suffix}';
		position: absolute;
		top: 50%;
		right: 1vw;

		transform: translateY(-50%);
		
	}
`

const Label = styled.label`
	display: block;
	margin-bottom: 1vh;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
`

const Input = styled.input`
	width: 100%;
	min-height: 21px;
	padding: 13px 10px;
	border: 1.5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;

	${(props) =>
		props.centered
			? css`
					text-align: center;
			  `
			: ''}

	&:focus {
		outline: none;
	}

	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	&[type='number'] {
		-moz-appearance: textfield;
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
	type,
	label,
	onChange,
	value,
	unit,
	centered,
	isShown,
}) {
	return (
		<InputContainer isShown={isShown}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<Container suffix={unit}>
				<Input
					centered={centered}
					id={name}
					name={name}
					value={value}
					placeholder={placeholder}
					type={type}
					onChange={onChange}
					required={true}
				/>
			</Container>
		</InputContainer>
	)
}

export function TextArea({
	name,
	placeholder,
	label,
	onChange,
	value,
	isShown,
}) {
	return (
		<InputContainer isShown={isShown}>
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
	centered: PropTypes.bool,
	isShown: PropTypes.bool,
}

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	isShown: PropTypes.bool,
}

TextInput.defaultProps = {
	isShown: true,
	type: 'text',
}

TextArea.defaultProps = {
	isShown: true,
}
