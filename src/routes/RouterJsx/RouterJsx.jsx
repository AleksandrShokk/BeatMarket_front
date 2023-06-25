import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { router } from './router.data.js'

const RouterJsx = () => {
	return (
		<BrowserRouter>
			<Routes>
				{router.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default RouterJsx
