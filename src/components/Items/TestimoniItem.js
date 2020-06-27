import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import IcUser from 'assets/icons/ic-user.svg'

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
	margin: 15px 0;
	max-width: 800px;
`

const NameContainer = styled.div`
	text-align: center;
	margin-top: 20px;

	.name {
		font-weight: 700;
	}
`

export default function TestimoniItem({ name, img, quotes, from }) {
	return (
		<TestimoniContainer>
			<TestimoniImageContainer>
				<img alt={`Testimoni ${name}`} src={img ? img : IcUser} />
			</TestimoniImageContainer>
			<QuotesContainer>
				<p>{`"${quotes}"`}</p>
			</QuotesContainer>
			<NameContainer>
				<p className="name">{name}</p>
				<p>{from}</p>
			</NameContainer>
		</TestimoniContainer>
	)
}

TestimoniItem.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string,
	quotes: PropTypes.string,
	from: PropTypes.string,
}
