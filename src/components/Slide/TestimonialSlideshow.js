import React from 'react'
import { Slide } from 'react-slideshow-image'

import { testimonials } from 'constants/testimonialExample'

import TestimoniItem from 'components/Items/TestimoniItem'

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	pauseOnHover: true,
}

export default function TestimonialSlideshow() {
	return (
		<Slide {...properties}>
			{testimonials.map((item) => (
				<TestimoniItem
					key={item.id}
					name={item.name}
					quotes={item.quotes}
					img={item.img}
				/>
			))}
		</Slide>
	)
}
