import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextContainer = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
`

const ErrorText = styled.p`
	color: ${({ theme }) => theme.colors.error};
	font-size: 1rem;
`

export function ErrorMessage({ message }) {
	return (
		<TextContainer>
			<ErrorText>{message}</ErrorText>
		</TextContainer>
	)
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
}
