import Grid from '@mui/material/Grid'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import Menu from '../menu/menu'

import { UserContext } from 'components/user/userContext'
import { ROUTES } from 'constants/routes'

export function Layout() {
	const { user } = useContext(UserContext)

	if (user?.role === 'ADMIN') {
		return <Navigate to={ROUTES.admin} />
	}

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
