import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Navbar from 'components/Navbar/Navbar'

import Landing from './pages/Landing'

function RouteWithLayout(route) {
	return (
		<>
			<Navbar />
			<Route
				path={route.path}
				exact={route.exact}
				render={(props) => <route.component {...props} routes={route.routes} />}
			/>
		</>
	)
}

export function RenderRoutes({ routes }) {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => {
					return <RouteWithLayout key={route.key} {...route} />
				})}
				<Route
					component={() => (
						<div>
							<h1>404! Anda salah alamat!</h1>
							<p>Silahkan kembali ke halaman selanjutnya</p>
						</div>
					)}
				/>
			</Switch>
		</Router>
	)
}

const ROUTES = [
	{ path: '/', key: 'ROOT', exact: true, component: Landing },
	{
		path: '/tentang',
		key: 'ABOUT',
		exact: true,
		component: () => <h1>Tentang</h1>,
	},
	{
		path: '/layanan',
		key: 'SERVICES',
		exact: true,
		component: () => <h1>Layanan</h1>,
	},
	{
		path: '/pesan-layanan',
		key: 'ORDER',
		exact: true,
		component: () => <h1>PESAN LAYANAN</h1>,
	},
]

export default ROUTES
