import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ContainedImage from 'components/Images/ContainedImage'

import Bag from 'assets/services/bag.svg'

import { otherServices } from 'constants/services'

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

const ServicesListContainer = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: auto auto;
	margin: 3vh 0;
`

const OtherServiceContainer = styled.div`
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

const OtherServicesListContainer = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: auto;
	margin: 3vh 0;
`

function ServiceCard() {
	return (
		<CardContainer>
			<ContainedImage src={Bag} alt="Tas" width="85px" />
			<p>Caption</p>
		</CardContainer>
	)
}

function OtherService({ name, description, img }) {
	return (
		<OtherServiceContainer>
			<ContainedImage src={img} alt="Tas" width="85px" />
			<h3>{name}</h3>
			<p>{description}</p>
		</OtherServiceContainer>
	)
}

export function ServicesList() {
	return (
		<ServicesListContainer>
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
		</ServicesListContainer>
	)
}

export function OtherServicesList() {
	return (
		<OtherServicesListContainer>
			{otherServices.map((item, index) => (
				<OtherService
					key={index}
					name={item.name}
					description={item.description}
					img={item.img}
				/>
			))}
		</OtherServicesListContainer>
	)
}

OtherService.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}
