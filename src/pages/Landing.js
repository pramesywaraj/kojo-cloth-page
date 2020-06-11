import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Wrapper from 'components/Layout/Wrapper'
import { PrimaryButton } from 'components/Button/Button'
import LandingBackground from 'assets/bg-landing.svg'

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;

	text-align: center;

	width: 100%;
	height: 100vh;

	color: ${({ theme }) => theme.colors.white};
	background: url(${LandingBackground});
	background-size: cover;
	background-repeat: no-repeat;
`

const HeaderTitleContainer = styled.div`
	background: transparent;
	border: 3px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	padding: 10px;
	text-align: center;

	p {
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
`

const HeaderCaptionContainer = styled.div`
	margin-top: 5vh;
	line-height: 20px;
`
const HeaderButtonContainer = styled.div`
	margin-top: 5vh;
	padding: 0 20%;
`

export default function Landing() {
	const history = useHistory()

	function goToOrderPage() {
		history.push('/pesan-layanan')
	}

	return (
		<main>
			<HeaderContainer>
				<Wrapper>
					<HeaderTitleContainer>
						<h1>Vendor Konfeksi</h1>
						<p>Make your best clothes!</p>
					</HeaderTitleContainer>
					<HeaderCaptionContainer>
						<p>Kojo Cloth hadir untuk memenuhi kebutuhan sandang Anda</p>
					</HeaderCaptionContainer>
					<HeaderButtonContainer>
						<PrimaryButton onClickHandler={goToOrderPage}>
							Pesan Sekarang
						</PrimaryButton>
					</HeaderButtonContainer>
				</Wrapper>
			</HeaderContainer>
		</main>
	)
}
