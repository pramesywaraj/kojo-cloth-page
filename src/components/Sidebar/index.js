import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import SidebarContext from 'context/sidebar.context'
import ContainedImage from 'components/Images/ContainedImage'

import Logo from 'assets/kojo-primary-logo.svg'

const Backdrop = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;

	z-index: 2;

	${({ show }) =>
		!show &&
		css`
			display: none;
		`}
`

const SidebarContainer = styled.div`
	padding: 10px;
	min-height: 100vh;
	width: 70vw;
	background: white;

	z-index: 99;
	position: fixed;

	display: flex;
	flex-direction: column;
	align-items: center;

	transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 0.3s ease-in-out;
`

const SidebarImageContainer = styled.div`
	margin: 5vh 0;
`

const SidebarMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	flex: 1 0 auto;
	margin: 10vh 0;

	a {
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.font};
		margin: 2vh 0;

		text-align: center;
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
`

const SidebarFooter = styled.footer`
	flex-shrink: 0;
	p {
		font-size: ${({ theme }) => theme.fontSize.extraSmall};
		color: ${({ theme }) => theme.colors.font};
		text-align: center;
	}
`

const SidemenuItem = [
	{
		key: 'HOME',
		name: 'Beranda',
		link: '/',
	},
	{
		key: 'ABOUT',
		name: 'Tentang Kami',
		link: '/tentang',
	},
	{
		key: 'SERVICES',
		name: 'Layanan',
		link: '/layanan',
	},
	{
		key: 'ORDER',
		name: 'Pesan',
		link: '/pesan-layanan',
	},
	{
		key: 'STATUS',
		name: 'Cek Status Pemesanan',
		link: '/cek-status-pemesanan',
	},
]

export default function Sidebar() {
	const { isShow, hideSidebar } = useContext(SidebarContext)

	function handleBackdropClick(e) {
		e.stopPropagation()
		hideSidebar()
	}

	return (
		<>
			<Backdrop show={isShow} onClick={handleBackdropClick} />
			<SidebarContainer show={isShow}>
				<SidebarImageContainer>
					<ContainedImage src={Logo} alt="Logo Kojo" width="100px" />
				</SidebarImageContainer>
				<SidebarMenuContainer>
					{SidemenuItem.map((item) => (
						<a key={item.key} href={item.link}>
							{item.name}
						</a>
					))}
				</SidebarMenuContainer>
				<SidebarFooter>
					<p>&copy; CV. Kojo Group Indonesia 2020</p>
				</SidebarFooter>
			</SidebarContainer>
		</>
	)
}
