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

const SuccessText = styled.p`
	color: ${({ theme }) => theme.colors.success};
	font-size: 1rem;
`

export function ErrorMessage({ message }) {
	function checkMessageType(message) {
		if (typeof message !== 'string') return 'Terjadi kesalahan'

		return message
	}

	return (
		<TextContainer>
			<ErrorText>{checkMessageType(message)}</ErrorText>
		</TextContainer>
	)
}

ErrorMessage.propTypes = {
	message: PropTypes.any.isRequired,
}

export function SuccessMessage({ message }) {
	return (
		<TextContainer>
			<SuccessText>{message}</SuccessText>
		</TextContainer>
	)
}

SuccessMessage.propTypes = {
	message: PropTypes.string.isRequired,
}
