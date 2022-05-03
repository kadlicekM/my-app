import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import WarningIcon from '@mui/icons-material/Warning'

export function Warning() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<WarningIcon color="error" sx={{ fontSize: '50px' }} />
			<Typography color="error" variant="h3">
				Nemate ziadne senzory
			</Typography>
		</Box>
	)
}
