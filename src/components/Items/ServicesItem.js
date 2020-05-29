import React from 'react'
import styled from 'styled-components'

import ContainedImage from 'components/Images/ContainedImage'

import Bag from 'assets/services/bag.svg'

const CardContainer = styled.div`
	width: 156px;
	height: 156px;
	border-radius: 20px;
	border: 2px solid ${({ theme }) => theme.colors.primary};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
		margin: 1vh 0;
	}
`

const OtherServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		margin: 2vh 0;
		color: ${({ theme }) => theme.colors.font};
	}

	p {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
	}
`

export function ServicesCard() {
	return (
		<CardContainer>
			<ContainedImage src={Bag} alt="Tas" width="85px" />
			<p>Caption</p>
		</CardContainer>
	)
}

export function OtherServices() {
	return (
		<OtherServicesContainer>
			<ContainedImage src={Bag} alt="Tas" width="85px" />
			<h3>Title</h3>
			<p>
				KOJO.CLOTH juga menerima pemesanan untuk membuat Tote Bag dengan bahan
				Canvas, Belacu, Drill, Dll.
			</p>
		</OtherServicesContainer>
	)
}
