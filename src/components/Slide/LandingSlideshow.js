import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image'

import img1 from 'assets/portfolio_example/img1.jpg'
import img2 from 'assets/portfolio_example/img2.jpg'
import img3 from 'assets/portfolio_example/img3.jpg'
import img4 from 'assets/portfolio_example/img4.jpg'

const images = [img1, img2, img3, img4]

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
			{images.map((image, index) => (
				<ImageContainer key={index}>
					<img src={image} alt={`gambar-${index}`} />
				</ImageContainer>
			))}
		</Slide>
	)
}
