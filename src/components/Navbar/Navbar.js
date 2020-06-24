import React, { useContext } from 'react'
import styled from 'styled-components'
import mediaQueries from 'theme/mediaQueries'

import { FaBars } from 'react-icons/fa'
import ContainedImage from 'components/Images/ContainedImage'
import Logo from 'assets/kojo-primary-logo.svg'

import SidebarContext from 'context/sidebar.context'

const NavbarLayout = styled.header`
	height: 62px;
	width: 100%;
	background-color: #ffffff;
	z-index: 100;

	box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.2);
	border-radius: 0 0 10px 10px;

	position: fixed;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0 3vw;

	.menu {
		position: absolute;
		left: 20px;

		color: ${({ theme }) => theme.colors.primary};
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		cursor: pointer;
	}

	.logo {
		cursor: pointer;

		${mediaQueries('desktop')`
			width: 10%;
			max-width: 100px;
		`}
	}

	${mediaQueries('desktop')`
		box-shadow: none;
		border-radius: 0;
		justify-content: space-between;
		height: 70px;

		.menu {
			display: none;
		}
	`}
`

const NavbarNav = styled.nav`
	${mediaQueries('desktop')`
		flex: 2;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		min-width: 20vw;

		ul > li > a {
			text-decoration: none;
		}
	`}

	${({ theme }) =>
		mediaQueries('desktop')(`
		ul > li > a {
			color: ${theme.colors.font};
			transition: color .4s ease-in-out;

			&:hover {
				color: ${theme.colors.primary};
			}
		}
	`)}
`

const NavbarExtendedList = styled.ul`
	flex: 1;
	display: none;

	${mediaQueries('desktop')`
		display: flex;
		flex-direction: row;
		justify-content: initial;
		align-items: center;
		min-width: 20vw;
		height: 100%;
		list-style-type: none;

		li {
			margin-right: 1.5vw;
		}
	`}
`

const NavbarCallToAction = styled.ul`
	flex: 1;
	display: none;

	${mediaQueries('desktop')`
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		height: 100%;
		list-style-type: none;
	`}

	${({ theme }) =>
		mediaQueries('desktop')(`
		.status-check {
			a {
				color: ${theme.colors.primary};
			}
			margin-right: 2vw;
		}

		.order-button {
			padding: 10px 20px;
			border: none;
			border-radius: 20px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			cursor: pointer;

			width: 100%;
			height: auto;

			transition-duration: 0.5s;
			background: ${theme.colors.primary};
			color: white;

			&:hover {
				background: ${theme.colors.darkPrimary};
			}

			&:active {
				background: ${theme.colors.veryDarkPrimary};
			}

			&:focus {
				outline: none;
			}
		}
	`)}
`

export default function Navbar() {
	const { showSidebar } = useContext(SidebarContext)

	return (
		<NavbarLayout>
			<a href="#" className="menu" onClick={showSidebar} role="button">
				<FaBars size="1.6em" />
			</a>
			<a href="#" className="logo">
				<ContainedImage src={Logo} alt="kojo-logo" width="auto" height="auto" />
			</a>
			<NavbarNav>
				<NavbarExtendedList>
					<li>
						<a href="/">Beranda</a>
					</li>
					<li>
						<a href="/layanan">Layanan</a>
					</li>
					<li>
						<a href="/tentang">Tentang Kami</a>
					</li>
				</NavbarExtendedList>
				<NavbarCallToAction>
					<li className="status-check">
						<a href="/">Cek Status Pemesanan</a>
					</li>
					<li>
						<a href="/pesan-layanan" role="button" className="order-button">
							Pesan Sekarang
						</a>
					</li>
				</NavbarCallToAction>
			</NavbarNav>
		</NavbarLayout>
	)
}
