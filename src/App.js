import React from 'react'
import ROUTE, { RenderRoutes } from './routes'
import SidebarProvider from 'components/Provider/sidebar'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar/Navbar'
import KojoFooter from 'components/Footer'

function App() {
	return (
		<div className="App">
			<SidebarProvider>
				<Sidebar />
				<Navbar />
			</SidebarProvider>
			<RenderRoutes routes={ROUTE} />
			<KojoFooter />
		</div>
	)
}

export default App
