import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TestimoniContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	height: auto;
	width: 100%;
`

const TestimoniImageContainer = styled.div`
	width: 90px;
	height: 90px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 50%;
	}
`
const QuotesContainer = styled.div`
	text-align: center;
	width: 100%;
	margin-top: 15px;
`

const NameContainer = styled.div`
	text-align: center;
	margin-top: 20px;
`

export default function TestimoniItem({ name, img, quotes }) {
	return (
		<TestimoniContainer>
			<TestimoniImageContainer>
				<img alt={`Testimoni ${name}`} src={img} />
			</TestimoniImageContainer>
			<QuotesContainer>
				<p>{`"${quotes}"`}</p>
			</QuotesContainer>
			<NameContainer>
				<p>{name}</p>
			</NameContainer>
		</TestimoniContainer>
	)
}

TestimoniItem.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	quotes: PropTypes.string.isRequired,
}
