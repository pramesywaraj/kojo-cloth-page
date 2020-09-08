import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const RegularButton = styled.button`
	padding: 1rem 1.2rem;
	border: none;
	border-radius: 0.5rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	cursor: pointer;

	width: 100%;
	height: auto;

	transition-duration: 0.5s;

	&:focus {
		outline: none;
	}

	${(props) =>
		props.primary &&
		css`
			background: ${({ theme }) => theme.colors.primary};
			color: white;

			&:hover {
				background: ${({ theme }) => theme.colors.darkPrimary};
			}

			&:active {
				background: ${({ theme }) => theme.colors.veryDarkPrimary};
			}
		`}

	${(props) =>
		props.outlined &&
		css`
			background: white;
			color: ${({ theme }) => theme.colors.primary};

			border: 1px solid ${({ theme }) => theme.colors.primary};

			&:hover {
				background: ${({ theme }) => theme.colors.primary};
				color: white;
			}

			&:active {
				color: ${({ theme }) => theme.colors.primary};
				background: ${({ theme }) => theme.colors.darkWhite};
			}
		`}
`

const IconButton = styled.button`
	display: inline-block;
	text-align: center;
	border-radius: 50%;
	padding: 0.35rem;

	border: none;
	text-decoration: none;
	cursor: pointer;

	width: auto;
	height: auto;

	min-width: 40px;
	min-height: 40px;

	transition-duration: 0.5s;

	&:focus {
		outline: none;
	}

	&:hover {
		background: rgba(209, 209, 209, 0.6);
	}

	${(props) =>
		props.primary &&
		css`
			background: ${({ theme }) => theme.colors.primary};
			color: white;

			&:hover {
				background: ${({ theme }) => theme.colors.darkPrimary};
			}

			&:active {
				background: ${({ theme }) => theme.colors.veryDarkPrimary};
			}
		`}
`

export function PrimaryButton({ onClickHandler, children, type }) {
	return (
		<RegularButton primary onClick={onClickHandler} type={type | 'button'}>
			{children}
		</RegularButton>
	)
}

export function OutlinedButton({ onClickHandler, children, type }) {
	return (
		<RegularButton outlined onClick={onClickHandler} type={type | 'button'}>
			{children}
		</RegularButton>
	)
}

export function IconedButton({ onClickHandler, children, ...rest }) {
	return (
		<IconButton onClick={onClickHandler} type="button" {...rest}>
			{children}
		</IconButton>
	)
}

PrimaryButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClickHandler: PropTypes.func,
	type: PropTypes.string,
}

OutlinedButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClickHandler: PropTypes.func,
	type: PropTypes.string,
}

IconedButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClickHandler: PropTypes.func,
}
