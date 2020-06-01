import React from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { OtherServicesList, ServicesList } from 'components/Items/ServicesItem'

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
					<ServicesList />
				</ServicesSection>
				<ServicesSection>
					<PrimarySectionTitle>Layanan Lainnya</PrimarySectionTitle>
					<OtherServicesList />
				</ServicesSection>
			</Wrapper>
		</ServicesMain>
	)
}
