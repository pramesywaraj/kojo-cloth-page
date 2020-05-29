import React from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { ServicesCard, OtherServices } from 'components/Items/ServicesItem'

const ServicesMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
	text-align: center;
`

const ServicesSection = styled.section`
	display: flex;
	flex-direction: column;

	.services-caption {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
	}

	.services-list {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: auto auto;

		margin: 3vh 0;
	}

	.services-other {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: auto;
		margin: 3vh 0;
	}
`

export default function Services() {
	return (
		<ServicesMain>
			<Wrapper>
				<ServicesSection>
					<PrimarySectionTitle>Layanan Kami</PrimarySectionTitle>
					<div className="services-caption">
						<p>
							Kami melayani pembuatan berbagai kebutuhan sandang Anda, seperti
						</p>
					</div>
					<div className="services-list">
						<ServicesCard />
						<ServicesCard />
						<ServicesCard />
						<ServicesCard />
						<ServicesCard />
					</div>
				</ServicesSection>
				<ServicesSection>
					<PrimarySectionTitle>Layanan Lainnya</PrimarySectionTitle>
					<div className="services-other">
						<OtherServices />
					</div>
				</ServicesSection>
			</Wrapper>
		</ServicesMain>
	)
}
