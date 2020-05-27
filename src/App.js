import React from 'react'
import ROUTE, { RenderRoutes } from './routes'
import SidebarProvider from 'components/Provider/sidebar'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar/Navbar'

function App() {
	return (
		<div className="App">
			<SidebarProvider>
				<Sidebar />
				<Navbar />
			</SidebarProvider>
			<RenderRoutes routes={ROUTE} />
		</div>
	)
}

export default App
