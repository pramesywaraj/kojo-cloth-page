import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextContainer = styled.div`
	width: 100%;
	height: auto;
	text-align: ${({ isCentered }) => (isCentered ? 'center' : 'inherit')};
	margin: 1vh 0;
`

const ErrorText = styled.p`
	color: ${({ theme }) => theme.colors.error};
	font-size: 1rem;
`

const SuccessText = styled.p`
	color: ${({ theme }) => theme.colors.success};
	font-size: 1rem;
`

export function ErrorMessage({ message, isCentered }) {
	function checkMessageType(message) {
		if (typeof message !== 'string') return 'Terjadi kesalahan'

		return message
	}

	return (
		<TextContainer isCentered={isCentered}>
			<ErrorText>{checkMessageType(message)}</ErrorText>
		</TextContainer>
	)
}

ErrorMessage.propTypes = {
	message: PropTypes.any.isRequired,
	isCentered: PropTypes.bool,
}

ErrorMessage.defaultProps = {
	isCentered: true,
}

export function SuccessMessage({ message, isCentered }) {
	return (
		<TextContainer isCentered={isCentered}>
			<SuccessText>{message}</SuccessText>
		</TextContainer>
	)
}

SuccessMessage.propTypes = {
	message: PropTypes.string.isRequired,
	isCentered: PropTypes.bool,
}

SuccessMessage.defaultProps = {
	isCentered: true,
}
