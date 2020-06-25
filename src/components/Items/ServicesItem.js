import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import mediaQueries from 'theme/mediaQueries'

import ContainedImage from 'components/Images/ContainedImage'
import { otherServices, services } from 'constants/services'

const ServicesListContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	width: 100%;
	margin: 3vh auto;
	justify-items: center;
	align-items: center;
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

const CardContainer = styled.div`
	max-width: 150px;
	height: 165px;
	border-radius: 20px;
	border: 2px solid ${({ theme }) => theme.colors.primary};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-basis: 50%;

	-ms-flex: auto;
  position: relative;
  box-sizing: border-box;

	margin: 2%;

	p {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
		margin: 1vh 0;
	}

	${mediaQueries('tablet')`
		flex-basis: 40%;
	`}

	${mediaQueries('small_screen')`
		margin: 1%;
		max-width: 200px;
	`}

	${mediaQueries('desktop')`
		
	`}

	${mediaQueries('large_screen')`
	`}
`

function ServiceCard({ name, img }) {
	return (
		<CardContainer>
			<ContainedImage src={img} alt="Tas" width="85px" height="85px" />
			<p>{name}</p>
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

export function ServicesList({ maxItem }) {
	const [serviceItems, setServiceItem] = useState([])

	useEffect(() => {
		let items = services

		if (maxItem) {
			let temp = items.slice(0, maxItem)
			items = temp
		}

		setServiceItem(items)
	}, [])

	return (
		<ServicesListContainer>
			{serviceItems.map((item, index) => (
				<ServiceCard key={index} name={item.name} img={item.img} />
			))}
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

ServiceCard.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}

OtherService.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}

ServicesList.propTypes = {
	maxItem: PropTypes.number,
}
