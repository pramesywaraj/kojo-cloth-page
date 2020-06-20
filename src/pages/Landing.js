import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Wrapper from 'components/Layout/Wrapper'
import { PrimaryButton, OutlinedButton } from 'components/Button/Button'
import ContainedImage from 'components/Images/ContainedImage'
import {
	PrimarySectionTitle,
	SecondarySectionTitle,
} from 'components/Misc/SectionTitle'
import { ServicesList, OtherServicesList } from 'components/Items/ServicesItem'
import LandingSlideshow from 'components/Slide/LandingSlideshow'
import TestimonialSlideshow from 'components/Slide/TestimonialSlideshow'
import ClientItems from 'components/Items/ClientItems'

import LandingBackground from 'assets/bg-landing.svg'
import KojoHuman1 from 'assets/illustrations/kojo-human-1.svg'

const Header = styled.header`
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

const ButtonContainer = styled.div`
	margin-top: 5vh;
	width: 50vw;
`

const Section = styled.section`
	background-color: ${({ background, theme }) => theme.colors[`${background}`]};
	height: auto;
`

const KojoLandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	text-align: center;
`

const KojoHeaderContainer = styled(KojoLandingContainer)`
	justify-content: center;
	min-height: 100vh;
`

const KojoDescriptionContainer = styled(KojoLandingContainer)`
	justify-content: center;
	min-height: 90vh;
	.kojo-illust-1 {
		width: 327px;
	}

	.kojo-short-description {
		color: white;
		margin: 5vh 0;
	}
`

const KojoServicesContainer = styled(KojoLandingContainer)`
	margin-bottom: 10vh;
`

const KojoPortfolioContainer = styled(KojoLandingContainer)`
	margin: 10vh auto;
`

const PortfolioContainer = styled.div`
	background-color: white;
	border-radius: 5%;
	width: 100%;
	height: auto;
	padding: 4%;
`

const KojoClientContainer = styled(KojoLandingContainer)`
	margin: 10vh auto;
`

const KojoTestimoniContainer = styled(KojoLandingContainer)`
	margin: 10vh auto;
`

const TestimoniSlideContainer = styled.div`
	width: 100%;
	height: auto;
`

export default function Landing() {
	const history = useHistory()

	function goToOrderPage() {
		history.push('/pesan-layanan')
	}

	function goToServicesPage() {
		history.push('/layanan')
	}

	return (
		<main>
			<Header>
				<Wrapper>
					<KojoHeaderContainer>
						<HeaderTitleContainer>
							<h1>Vendor Konfeksi</h1>
							<p>Make your best clothes!</p>
						</HeaderTitleContainer>
						<HeaderCaptionContainer>
							<p>Kojo Cloth hadir untuk memenuhi kebutuhan sandang Anda</p>
						</HeaderCaptionContainer>
						<ButtonContainer>
							<PrimaryButton onClickHandler={goToOrderPage}>
								Pesan Sekarang
							</PrimaryButton>
						</ButtonContainer>
					</KojoHeaderContainer>
				</Wrapper>
			</Header>
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
			<Section aria-label="Layanan Kojo Cloth" background="white">
				<Wrapper>
					<PrimarySectionTitle>Layanan Kami</PrimarySectionTitle>
					<KojoServicesContainer>
						<ServicesList maxItem={4} />
						<ButtonContainer>
							<OutlinedButton onClickHandler={goToServicesPage}>
								Selengkapnya
							</OutlinedButton>
						</ButtonContainer>
					</KojoServicesContainer>
				</Wrapper>
			</Section>
			<Section aria-label="Layanan Kojo Cloth Lainnya" background="white">
				<Wrapper>
					<PrimarySectionTitle>Layanan Lainnya</PrimarySectionTitle>
					<KojoServicesContainer>
						<OtherServicesList />
					</KojoServicesContainer>
				</Wrapper>
			</Section>
			<Section aria-label="Portfolio Kojo Cloth" background="primary">
				<Wrapper>
					<SecondarySectionTitle>Portfolio</SecondarySectionTitle>
					<KojoPortfolioContainer>
						<PortfolioContainer>
							<LandingSlideshow />
						</PortfolioContainer>
					</KojoPortfolioContainer>
				</Wrapper>
			</Section>
			<Section aria-label="Klien Kojo Cloth" background="white">
				<Wrapper>
					<PrimarySectionTitle>Klien Kami</PrimarySectionTitle>
					<KojoClientContainer>
						<ClientItems />
					</KojoClientContainer>
				</Wrapper>
			</Section>
			<Section aria-label="Testimoni Kojo Cloth" background="white">
				<Wrapper>
					<PrimarySectionTitle>Testimoni</PrimarySectionTitle>
					<KojoTestimoniContainer>
						<TestimoniSlideContainer>
							<TestimonialSlideshow />
						</TestimoniSlideContainer>
					</KojoTestimoniContainer>
				</Wrapper>
			</Section>
		</main>
	)
}
