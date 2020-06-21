import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

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

const Footer = styled.footer`
	width: 100%;
	min-height: 20vh;

	background: ${({ theme }) => theme.colors.primary};
	color: white;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`

const LogoContainer = styled.div`
	display: none;
`

const CustomerAreaContainer = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
	padding: 5%;

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
`

const AdditionalInfoContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5%;
	margin-top: 5vh;

	.info-operational {
		flex: 1 0 auto;

		.info-element {
			margin-bottom: 3vh;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

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
			<LogoContainer>
				<p>Logo</p>
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
							Komplek Taman Cileunyi Blok 2A No.14, Cileunyi Kulon, Cileunyi,
							Bandung, Jawa Barat 40622
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
					<a href="/">
						<Icon src={Facebook} width="44px" />
					</a>
					<a href="/">
						<Icon src={Google} width="44px" />
					</a>
					<a href="/">
						<Icon src={Twitter} width="44px" />
					</a>
					<a href="/">
						<Icon src={Youtube} width="44px" />
					</a>
					<a href="/">
						<Icon src={Instagram} width="44px" />
					</a>
				</div>
			</AdditionalInfoContainer>
			<CopyrightContainer>
				<p>&copy; CV. Kojo Group Indonesia 2020</p>
			</CopyrightContainer>
		</Footer>
	)
}

export default KojoFooter
