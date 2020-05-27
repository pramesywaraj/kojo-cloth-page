import { createContext } from 'react'

const SidebarContext = createContext({
	isShow: false,
	showSidebar: () => {},
	closeSidebar: () => {},
})

export default SidebarContext
