import Grid from '@mui/material/Grid'
// import SettingsIcon from '@mui/icons-material/Settings'

import Menu from '../menu/menu'
import { Outlet } from 'react-router-dom'

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
				<Outlet />
			</Grid>
		</Grid>
	)
}
