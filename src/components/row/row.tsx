import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			light: '#ff7961',
			main: '#616161',
			dark: '#373737',
		},
	},
})

type Props = {
	label: string
	value?: string
	withDivider?: boolean
}

export function Row({ label, value, withDivider = false }: Props) {
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: '5px',
				}}
			>
				<ThemeProvider theme={theme}>
					<Typography sx={{ fontSize: 20, color: 'primary.main' }}>
						{label}
					</Typography>
					<Typography
						sx={{ fontSize: 20, color: 'primary.dark', fontWeight: 'bold' }}
					>
						{value}
					</Typography>
				</ThemeProvider>
			</Box>
			{withDivider && <Divider />}
		</Box>
	)
}
