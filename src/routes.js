import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from 'utils/history'

import Landing from 'pages/Landing/Landing'
import About from 'pages/About/About'
import Services from 'pages/Services/Services'
import Order from 'pages/Order/Order'
import OrderStatusCheck from 'pages/Status/OrderStatusCheck'

function RouteWithLayout(route) {
	return (
		<>
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
		<Router history={history}>
			<Switch>
				{routes.map((route) => {
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

RenderRoutes.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			route: PropTypes.object,
		})
	),
}

const ROUTES = [
	{ path: '/', key: 'ROOT', exact: true, component: Landing },
	{
		path: '/tentang',
		key: 'ABOUT',
		exact: true,
		component: About,
	},
	{
		path: '/layanan',
		key: 'SERVICES',
		exact: true,
		component: Services,
	},
	{
		path: '/pesan-layanan',
		key: 'ORDER',
		exact: true,
		component: Order,
	},
	{
		path: '/cek-status-pemesanan',
		key: 'STATUS',
		exact: true,
		component: OrderStatusCheck,
	},
]

export default ROUTES
