import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import { BottomInfo } from 'components/menu/bottom-data'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { UserContext } from 'components/user/userContext'

type MenuItem = {
	label: string
	path: string
}

const MenuItems: MenuItem[] = [
	{
		label: 'HLAVNÁ STRÁNKA',
		path: '/',
	},
	{
		label: 'GRAFY',
		path: 'grafy',
	},
	{
		label: 'KONFIGURÁCIA',
		path: 'konfiguracia',
	},
]

function Menu() {
	const { user, logoutUser, loginUser } = useContext(UserContext)

	return (
		<>
			<Typography variant="h4" align="center" gutterBottom={true}>
				Menu
			</Typography>
			<Divider />
			<Stack sx={{ margin: 2, mt: 10, mb: 50 }}>
				{MenuItems.map(item => (
					<Button
						key={item.path}
						component={Link}
						to={`${item.path}`}
						style={{
							padding: '16px 16px',
							cursor: 'pointer',
							color: '#373737',
						}}
					>
						<Typography
							variant="h5"
							sx={{
								fontWeight: 'bold',
								fontStyle: 'normal',
							}}
						>
							{item.label}
						</Typography>
					</Button>
				))}
			</Stack>

			<BottomInfo>
				<Box>
					<PersonIcon fontSize="large" />
					<Typography sx={{ mb: 5 }} variant="body1">
						{user?.login}
					</Typography>
					<Button onClick={logoutUser}>
						<LogoutIcon fontSize="large" />
					</Button>
				</Box>
			</BottomInfo>
		</>
	)
}

export default Menu
