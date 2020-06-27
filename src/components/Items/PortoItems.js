import React from 'react'
import styled from 'styled-components'
import mediaQueries from 'theme/mediaQueries'

import { portofolios } from 'constants/portofolio'
import ContainedImage from 'components/Images/ContainedImage'
import img1 from 'assets/portfolio_example/1.jpeg'

const PortoContainer = styled.div`
	display: none;

	${mediaQueries('small_screen')`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin: 3vh auto;
    justify-items: center;
    align-items: center;
    background: white;
    padding: 3%;
	  border-radius: 20px;
  `}
`

const PortoImageContainer = styled.div`
	flex-basis: 20%;
	margin: 1.5vh 1vw;
`

export default function PortoItems() {
	return (
		<PortoContainer>
			{portofolios.map((item, index) => (
				<PortoImageContainer key={index}>
					<ContainedImage src={item.img} alt={`Porto ${index}`} />
				</PortoImageContainer>
			))}
		</PortoContainer>
	)
}
