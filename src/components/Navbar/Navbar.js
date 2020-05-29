import React, { useContext } from 'react'
import styled from 'styled-components'

import { FaBars } from 'react-icons/fa'

import ContainedImage from 'components/Images/ContainedImage'
import Logo from 'assets/kojo-primary-logo.svg'

import SidebarContext from 'context/sidebar.context'

const NavbarLayout = styled.nav`
	height: 8vh;
	width: 100%;
	background-color: #ffffff;
	z-index: 100;

	box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.2);
	border-radius: 0 0 10px 10px;

	position: fixed;
	z-index: 1;
`

const NavbarLinkList = styled.ul`
	margin: 0;
	padding: 0 10px;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	align-items: center;
	justify-items: center;
	text-align: center;
	height: 100%;
	list-style-type: none;
	a {
		text-decoration: none;
		color: #777777;
	}
	.logo {
		grid-column: 2 / span 10;
	}
	.menu {
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.colors.primary};

		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		cursor: pointer;
	}
`

function NavbarExtendedMenu() {
	return (
		<>
			<li className="link">
				<a href="/">Menu</a>
			</li>
			<li className="link">
				<a href="/">Logo</a>
			</li>
		</>
	)
}

export default function Navbar() {
	const { showSidebar } = useContext(SidebarContext)

	return (
		<NavbarLayout>
			<NavbarLinkList>
				<li className="menu" onClick={showSidebar}>
					<FaBars size="1.6em" />
				</li>
				<li className="logo">
					<ContainedImage
						src={Logo}
						alt="kojo-logo"
						width="auto"
						height="25px"
					/>
				</li>
			</NavbarLinkList>
		</NavbarLayout>
	)
}
