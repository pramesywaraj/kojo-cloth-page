import React, { useState } from 'react'
import SidebarContext from 'context/sidebar.context'
import PropTypes from 'prop-types'

const SidebarProvider = ({ children }) => {
	const showSidebar = () => {
		setSidebar((prevState) => {
			return {
				...prevState,
				isShow: true,
			}
		})
	}

	const hideSidebar = () => {
		setSidebar((prevState) => {
			return {
				...prevState,
				isShow: false,
			}
		})
	}

	const sidebarState = {
		isShow: 0,
		showSidebar,
		hideSidebar,
	}

	const [sidebar, setSidebar] = useState(sidebarState)

	return (
		<SidebarContext.Provider value={sidebar}>
			{children}
		</SidebarContext.Provider>
	)
}

SidebarProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default SidebarProvider
