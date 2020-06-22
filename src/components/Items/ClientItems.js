import React from 'react'
import styled from 'styled-components'

import ExampleClient1 from 'assets/clients_example/example-1.svg'
import ExampleClient2 from 'assets/clients_example/example-2.svg'
import ExampleClient3 from 'assets/clients_example/example-3.svg'
import ExampleClient4 from 'assets/clients_example/example-4.svg'
import ExampleClient5 from 'assets/clients_example/example-5.svg'
import ExampleClient6 from 'assets/clients_example/example-6.svg'
import ExampleClient7 from 'assets/clients_example/example-7.svg'
import ExampleClient8 from 'assets/clients_example/example-8.svg'
import ExampleClient9 from 'assets/clients_example/example-9.svg'
import ExampleClient10 from 'assets/clients_example/example-10.svg'
import ExampleClient11 from 'assets/clients_example/example-11.svg'
import ExampleClientUnpad from 'assets/clients_example/unpad_example.svg'

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
				<img src={ExampleClient1} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient2} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient3} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient4} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient5} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient6} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient7} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient8} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient9} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient10} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClient11} alt="example" />
			</ClientContainer>
			<ClientContainer>
				<img src={ExampleClientUnpad} alt="example" />
			</ClientContainer>
		</ClientsGrid>
	)
}
