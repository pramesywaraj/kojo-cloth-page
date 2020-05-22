import React from 'react'
import ROUTE, { RenderRoutes } from './routes'

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			<RenderRoutes routes={ROUTE} />
		</div>
	)
}

export default App
