import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Wrapper from 'components/Layout/Wrapper'
import { PrimaryButton } from 'components/Button/Button'
import ContainedImage from 'components/Images/ContainedImage'

import LandingBackground from 'assets/bg-landing.svg'
import KojoHuman1 from 'assets/illustrations/kojo-human-1.svg'

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
const Section = styled.section`
	background-color: ${({ background, theme }) => theme.colors[`${background}`]};
	height: auto;
`

const KojoDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	min-height: 90vh;
	.kojo-illust-1 {
		width: 327px;
	}

	.kojo-short-description {
		color: white;
		text-align: center;
		margin: 5vh 0;
	}
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
			<Section aria-label="Penjelasan Kojo Cloth" background="primary">
				<Wrapper>
					<KojoDescriptionContainer>
						<div className="kojo-illust-1">
							<ContainedImage
								src={KojoHuman1}
								alt="Illustrasi Kojo 1"
								width=""
							/>
						</div>
						<div className="kojo-short-description">
							<p>
								<b>Kojo Cloth</b> hadir untuk memenuhi kebutuhan sandang
								pribadi, organisasi atau komunitasmu. Kami menerima permintaan
								pembuatan Jaket, Jas, Kaos, Kemeja, Rompi, Toga, Tas Jinjing
								(Tote Bag), dan lainnya.
							</p>
						</div>
					</KojoDescriptionContainer>
				</Wrapper>
			</Section>
		</main>
	)
}
