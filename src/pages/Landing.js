import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import mediaQueries from 'theme/mediaQueries'

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
import KojoHuman2 from 'assets/illustrations/kojo-human-2.svg'

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
	padding: 3vh 6vw;
	text-align: center;

	p {
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
`

const HeaderCaptionContainer = styled.div`
	margin-top: 2vh;
	line-height: 20px;
`

const ButtonContainer = styled.div`
	margin-top: 5vh;
	width: 75vw;

	${mediaQueries('tablet')`
		max-width: 318px;
	`}
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
		width: auto;
		max-width: 300px;
	}

	.kojo-short-description {
		color: white;
		margin: 5vh 0;
		padding: 0 5vw;
	}

	${mediaQueries('tablet')`
		.kojo-illust-1 {
			width: 70vw;
			max-width: 525px;
		}
	`}

	${mediaQueries('desktop')`
		flex-direction: row;

		.kojo-illust-1 {
			width: 60vw;
			max-width: 670px;
			flex: 2;
		}

		.kojo-short-description {
			flex: 1;
		}
	`}
	
	${mediaQueries('large_screen')`
		.kojo-illust-1 {
			max-width: 900px;
		}

		.kojo-short-description {
			padding: 0 7vw;
		}
	`}
`

const KojoServicesContainer = styled(KojoLandingContainer)`
	${mediaQueries('small_screen')`
		margin: 10vh 0;
	`}
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

const KojoContactContainer = styled(KojoLandingContainer)`
	margin: 5vh auto;
	max-width: 500px;

	p {
		font-size: 1.7rem;
		font-weight: 500;
		color: white;
	}

	.kojo-illust-2 {
		width: 90vw;
		max-width: 500px;
		margin-top: 5vh;
	}

	${mediaQueries('tablet')`
		.kojo-illust-2 {
			width: 70vw;
		}
	`}
`

export default function Landing() {
	const history = useHistory()

	function goToOrderPage() {
		history.push('/pesan-layanan')
	}

	function goToServicesPage() {
		history.push('/layanan')
	}

	function goToContact() {
		window.open('https://wa.me/6281322210723')
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
							<ContainedImage src={KojoHuman1} alt="Illustrasi Kojo 1" />
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
			<Section aria-label="Kontak Kojo Cloth" background="primary">
				<Wrapper>
					<KojoContactContainer>
						<p>Ada pertanyaan seputar Kojo Cloth ? Silahkan hubungi kami</p>
						<ButtonContainer>
							<OutlinedButton onClickHandler={goToContact}>
								Hubungi Kami Disini
							</OutlinedButton>
						</ButtonContainer>
						<div className="kojo-illust-2">
							<ContainedImage src={KojoHuman2} alt="Illustrasi Kojo 1" />
						</div>
					</KojoContactContainer>
				</Wrapper>
			</Section>
		</main>
	)
}
