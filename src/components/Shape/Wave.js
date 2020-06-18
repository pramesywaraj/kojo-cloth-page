import React from 'react'
import styled from 'styled-components'

const WaveShape = styled.svg`
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
`

export default function Wave() {
	return (
		<WaveShape viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
			<path
				d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
				style="stroke: none; fill:#672693;"
			></path>
		</WaveShape>
	)
}
