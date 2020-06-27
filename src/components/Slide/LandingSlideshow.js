import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image'

import { portofolios } from 'constants/portofolio'

const images = [...portofolios]

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	pauseOnHover: true,
}

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: contain;
	}
`

export default function LandingSlideshow() {
	return (
		<Slide {...properties}>
			{images.map((item, index) => (
				<ImageContainer key={index}>
					<img src={item.img} alt={`gambar-${index}`} />
				</ImageContainer>
			))}
		</Slide>
	)
}
