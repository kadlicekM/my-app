import Grid from '@mui/material/Grid'
// import SettingsIcon from '@mui/icons-material/Settings'

import Menu from '../menu/menu'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from 'routes/homepage/homepage'
import { Stats } from 'routes/stats/stats'
import { Config } from 'routes/configuration/config'
//ghostwhite farba bgcolor

export function Layout() {
	return (
		<Grid container direction="row" height="100vh">
			<Grid
				item
				md={3}
				lg={3}
				xl={3}
				justifyContent="center"
				sx={{
					borderRight: 1,
					bgcolor: 'white',
					position: 'relative',
					zIndex: 2,
					backgroundColor: '#eceff1',
				}}
			>
				<Menu />
			</Grid>
			<Grid
				item
				md={9}
				lg={9}
				xl={9}
				sx={{ bgcolor: 'white', height: '100vh' }}
			>
				<Routes>
					<Route element={<Homepage />} path="/" />
					<Route element={<Stats />} path="/grafy"></Route>
					<Route element={<Config />} path="/konfiguracia" />
					<Route element={<>hups! 404 </>} path="*" />
				</Routes>
			</Grid>
		</Grid>
	)
}
