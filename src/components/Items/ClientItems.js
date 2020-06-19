import React from 'react'
import styled from 'styled-components'

import ExampleClient from 'assets/clients_example/unpad_example.svg'

const ClientsGrid = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	justify-items: center;
	align-items: center;

	width: 100%;
	height: auto;
`

const ClientContainer = styled.div`
	background-color: white;
	border-radius: 100%;
	width: 80px;
	height: 80px;
	padding: 5%;

	-webkit-box-shadow: 3px 4px 7px 0px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: 3px 4px 7px 0px rgba(0, 0, 0, 0.22);
	box-shadow: 3px 4px 7px 0px rgba(0, 0, 0, 0.22);

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
		display: block;
	}
`

export default function ClientItems() {
	return (
		<ClientsGrid>
			<ClientContainer>
				<img src={ExampleClient} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient} alt="example" />
			</ClientContainer>
		</ClientsGrid>
	)
}
