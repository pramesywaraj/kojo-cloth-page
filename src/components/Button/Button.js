import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const RegularButton = styled.button`
	padding: 15px;
	border: none;
	border-radius: 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	cursor: pointer;

	width: 100%;
	height: auto;

	${(props) =>
		props.primary &&
		css`
			background: ${({ theme }) => theme.colors.primary};
			color: white;
		`}

	${(props) =>
		props.outlined &&
		css`
			background: white;
			color: ${({ theme }) => theme.colors.primary};

			border: 1px solid ${({ theme }) => theme.colors.primary};
		`}
`

export function PrimaryButton({ onClickHandler, children }) {
	return (
		<RegularButton primary onClick={onClickHandler}>
			{children}
		</RegularButton>
	)
}

PrimaryButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClickHandler: PropTypes.func.isRequired,
}
