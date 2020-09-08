import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const RadioContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
	flex-direction: column;
	align-items: baseline;

	position: relative;
`

const RadioInnerContainer = styled.div`
	display: block;
	margin: 0 1vw;
`

const InputLabel = styled.label`
	margin-bottom: 1vh;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
`

const Label = styled.label`
	position: relative;
	display: ${({ isColumned }) => (isColumned ? 'block' : 'inline-block')};
	margin: ${({ isColumned }) =>
		isColumned ? '1em 1em 2em 1em' : '1em 2em 1em 1em'};
	font-size: 1em;
`

const popInAnimation = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`

const Indicator = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 1em;
	width: 1.2em;
	height: 1.2em;
	position: absolute;
	top: 0;
	left: -1.5em;

	cursor: pointer;

	${Label}:hover & {
		background: #e0e0e0;
	}

	&::after {
		content: '';
		position: absolute;
		display: none;
	}

	${Input}:checked + &::after {
		display: block;
		border: solid ${({ theme }) => theme.colors.primary};
		border-radius: 1em;
		background-color: ${({ theme }) => theme.colors.primary};
		width: 0.5em;
		height: 0.5em;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-name: ${popInAnimation};
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}

	${Input}:disabled + & {
		pointer-events: none;
		opacity: 0.6;
		background: #e6e6e6;
	}
`

export function RadioInputContainer({
	children,
	label,
	name,
	selectedValue,
	onChangeValue,
	isShown,
	isColumned,
}) {
	return (
		<RadioContainer id={name} isShown={isShown} role="radiogroup">
			<InputLabel htmlFor={name}>{label}</InputLabel>
			<RadioInnerContainer>
				{React.Children.map(children, (element) =>
					React.cloneElement(element, {
						...element.props,
						checked: selectedValue === element.props.value,
						onChange: onChangeValue,
						name,
						isColumned,
					})
				)}
			</RadioInnerContainer>
		</RadioContainer>
	)
}

export function RadioInput({
	label,
	id,
	name,
	value,
	disabled,
	checked,
	onChange,
	isColumned,
}) {
	return (
		<Label htmlFor={id} isColumned={isColumned}>
			{label}
			<Input
				id={id}
				type="radio"
				role="radio"
				name={name}
				value={value}
				disabled={disabled}
				onChange={onChange}
				checked={checked}
				isColumned={isColumned}
			/>
			<Indicator />
		</Label>
	)
}

RadioInput.propTypes = {
	label: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	isColumned: PropTypes.bool,
}

RadioInput.defaultProps = {
	disabled: false,
	onChange: () => {},
	value: '',
	id: '',
}

RadioInputContainer.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
	isShown: PropTypes.bool,
	name: PropTypes.string,
	onChangeValue: PropTypes.func,
	selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isColumned: PropTypes.bool,
}

RadioInputContainer.defaultProps = {
	isShown: true,
	name: '',
	selectedValue: '',
	isColumned: false,
}
