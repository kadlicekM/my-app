import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { BottomInfo } from 'components/menu/bottom-data'

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
		label: 'KONFIGURACIA',
		path: 'konfiguracia',
	},
]

function Menu() {
	return (
		<>
			<Typography variant="h4" align="center" gutterBottom={true}>
				Menu
			</Typography>
			<Divider />
			<Stack sx={{ margin: 2, mt: 10 }}>
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
				<PersonIcon />
				<Typography variant="body1">&nbsp;&nbsp;login:John Doe</Typography>
			</BottomInfo>
		</>
	)
}

export default Menu
