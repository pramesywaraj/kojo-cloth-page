import React from 'react'
import ROUTE, { RenderRoutes } from './routes'

function App() {
	return (
		<div className="App">
			<RenderRoutes routes={ROUTE} />
		</div>
	)
}

export default App
