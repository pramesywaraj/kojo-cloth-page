import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
	width: auto;
	max-width: 20vw;
	height: 100%;

	display: flex;
	flex-direction: row;

	justify-content: space-between;
	align-items: center;

	p {
		opacity: 0.5;
	}
`

const LoadingSpinner = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primary};
	opacity: 0.5;

	-webkit-animation: loading-bounce 2s infinite ease-in-out;
	animation: loading-bounce 2s infinite ease-in-out;

	@-webkit-keyframes loading-bounce {
		0%,
		100% {
			-webkit-transform: scale(0);
		}
		50% {
			-webkit-transform: scale(1);
		}
	}

	@keyframes loading-bounce {
		0%,
		100% {
			transform: scale(0);
			-webkit-transform: scale(0);
		}
		50% {
			transform: scale(1);
			-webkit-transform: scale(1);
		}
	}
`

export default function Loading() {
	return (
		<LoadingContainer>
			<LoadingSpinner />
			<LoadingSpinner />
			<LoadingSpinner />
		</LoadingContainer>
	)
}
