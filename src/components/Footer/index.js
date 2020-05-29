import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { KojoTips } from 'constants/kojoTips'

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

	.kojo-tips {
		display: flex;
		flex-direction: column;
		a {
			color: white;
			text-decoration: none;
			line-height: 20px;

			margin-top: 5vh;
			font-size: ${({ theme }) => theme.fontSize.small};
		}
	}
`

const AdditionalInfoContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 5vh 0;
`

function KojoFooter() {
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
				<p>Information</p>
			</AdditionalInfoContainer>
		</Footer>
	)
}

export default KojoFooter
