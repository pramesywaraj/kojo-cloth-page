import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import mediaQueries from 'theme/mediaQueries'

import Icon from 'components/Images/Icon'

import { KojoTips } from 'constants/kojoTips'

import Pin from 'assets/icons/ic-pin.svg'
import Phone from 'assets/icons/ic-phone.svg'
import Email from 'assets/icons/ic-email.svg'
import Hours from 'assets/icons/ic-hours.svg'

import Facebook from 'assets/icons/ic-fb.svg'
import Google from 'assets/icons/ic-google.svg'
import Instagram from 'assets/icons/ic-instagram.svg'
import Twitter from 'assets/icons/ic-twitter.svg'
import Youtube from 'assets/icons/ic-youtube.svg'
import Logo from 'assets/kojo-primary-logo.svg'
import ContainedImage from 'components/Images/ContainedImage'

const Footer = styled.footer`
	width: 100%;
	min-height: 20vh;

	background: ${({ theme }) => theme.colors.primary};
	color: white;
`

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	margin: 0 2vw;

	${mediaQueries('desktop')`
		flex-direction: row;
		justify-content: center;
		padding: 10vh 0;
	`}
`

const FooterStandard = styled.div`
	max-width: 400px;
	padding: 5%;
	text-align: center;
	${mediaQueries('desktop')`
		padding: 2%;
		text-align: left;
	`}
`

const LogoContainer = styled.div`
	display: none;

	${mediaQueries('desktop')`
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		min-width: 20vw;
		min-height: 210px;
		padding: 10px;
	`}
`

const CustomerAreaContainer = styled(FooterStandard)`
	width: 100%;
	height: auto;

	h2 {
		font-weight: 600;
		font-size: 2rem;
	}

	.kojo-tips {
		display: flex;
		flex-direction: column;
		a {
			color: white;
			text-decoration: none;
			line-height: 20px;

			margin-top: 5vh;
			font-size: ${({ theme }) => theme.fontSize.regular};
		}
	}

	${mediaQueries('desktop')`
		h2 {
			font-size: 1.5rem;
		}

		.kojo-tips {
			a {
				margin-top: 2vh;
			}
		}
	`}
`

const AdditionalInfoContainer = styled(FooterStandard)`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	.info-operational {
		flex: 1 0 auto;

		.info-element {
			margin-bottom: 3vh;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			width: 100%;

			p {
				margin-top: 2vh;
				font-size: ${({ theme }) => theme.fontSize.regular};
			}
		}
	}

	.info-social-media {
		margin: 2.5vh 0;
		flex-shrink: 0;
		display: flex;
		width: 100%;
		justify-content: space-between;

		a {
			height: auto;
			width: auto;
			display: block;
		}
	}

	${mediaQueries('desktop')`
		.info-operational {
			.info-element {
				flex-direction: row;
				text-align: left;

				p {
					flex: 2;
					margin-left: 10px;
					margin-top: 0;
				}
			}
		}
	`}
`

const CopyrightContainer = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
	padding: 5%;

	p {
		font-size: ${({ theme }) => theme.fontSize.regular};
	}
`

function KojoFooter() {
	function goToLocation() {
		window.open(
			'https://www.google.com/maps/dir//-6.9491263,107.7411329/@-6.949126,107.741133,15z?hl=en'
		)
	}

	return (
		<Footer>
			<FooterContainer>
				<LogoContainer>
					<ContainedImage src={Logo} alt="Logo Kojo" width="210px" />
				</LogoContainer>
				<CustomerAreaContainer>
					<h2>Customer Area</h2>
					<div className="kojo-tips">
						{KojoTips.map((tip, index) => (
							<a key={index} href={tip.link}>
								{tip.tips}
							</a>
						))}
					</div>
				</CustomerAreaContainer>
				<AdditionalInfoContainer>
					<div className="info-operational">
						<div className="info-element" onClick={goToLocation}>
							<Icon src={Pin} width="26px" />
							<p>
								Komplek Perumahan Permata Biru, Jl. Permata III No.72, Cinunuk,
								Cileunyi, Bandung, Jawa Barat 40624
							</p>
						</div>
						<div className="info-element">
							<Icon src={Email} width="26px" />
							<p>kojo.cloth@gmail.com</p>
						</div>
						<div className="info-element">
							<Icon src={Hours} width="26px" />
							<p>08:00 - 23:00 WIB</p>
						</div>
						<div className="info-element">
							<Icon src={Phone} width="26px" />
							<p>0813-2221-0723 (Faizal)</p>
						</div>
					</div>
					<div className="info-social-media">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/kojocloth.id"
						>
							<Icon src={Facebook} width="44px" />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://aboutme.google.com/u/3/?referer=gplus&pageId=none"
						>
							<Icon src={Google} width="44px" />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://twitter.com/tw_kojocloth"
						>
							<Icon src={Twitter} width="44px" />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.youtube.com/channel/UCC1E7PUDHA1fuXfTOdfQOEg/featured"
						>
							<Icon src={Youtube} width="44px" />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://instagram.com/kojo.cloth"
						>
							<Icon src={Instagram} width="44px" />
						</a>
					</div>
				</AdditionalInfoContainer>
			</FooterContainer>
			<CopyrightContainer>
				<p>&copy; CV. Kojo Group Indonesia 2020</p>
			</CopyrightContainer>
		</Footer>
	)
}

export default KojoFooter
