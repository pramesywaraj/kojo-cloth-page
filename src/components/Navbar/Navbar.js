import React from 'react'
import styled from 'styled-components'

const NavbarLayout = styled.nav`
	height: 8vh;
	width: 100%;
	background-color: #ffffff;
	z-index: 100;

	box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.2);
`

const NavbarLinkList = styled.ul`
	margin: 0;
	padding: 0 10px;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	align-items: center;
	justify-items: center;
	text-align: center;
	height: 100%;
	.link {
		list-style-type: none;

		a {
			text-decoration: none;
			color: #777777;
		}
	}
`

export default function Navbar() {
	return (
		<NavbarLayout>
			<NavbarLinkList>
				<li className="link">
					<a href="/">Menu</a>
				</li>
				<li className="link">
					<a href="/">Logo</a>
				</li>
			</NavbarLinkList>
		</NavbarLayout>
	)
}
