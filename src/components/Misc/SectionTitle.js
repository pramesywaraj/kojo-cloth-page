import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
	margin: 3vh 0;
	text-align: center;

	${({ primary }) =>
		primary &&
		css`
			color: ${({ theme }) => theme.colors.primary};
		`}

	${({ secondary }) =>
		secondary &&
		css`
			color: white;
		`}
  
  h2 {
		margin-bottom: 3vh;
		font-weight: 600;
	}

	hr {
		height: 4px;
		width: 40%;
		border: none;
		${({ primary }) =>
			primary &&
			css`
				background-color: ${({ theme }) => theme.colors.primary};
			`}
		${({ secondary }) =>
			secondary &&
			css`
				background-color: white;
			`};
	}
`

export function PrimarySectionTitle({ children }) {
	return (
		<Container primary>
			<h2>{children}</h2>
			<hr />
		</Container>
	)
}

export function SecondarySectionTitle({ children }) {
	return (
		<Container secondary>
			<h2>{children}</h2>
			<hr />
		</Container>
	)
}

PrimarySectionTitle.propTypes = {
	children: PropTypes.node,
}

SecondarySectionTitle.propTypes = {
	children: PropTypes.node,
}
