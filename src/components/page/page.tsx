import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

type PageProps = {
	headerLabel: string
	children: React.ReactNode
}

export function Page({ headerLabel, children }: PageProps) {
	return (
		<Box sx={{ height: '100vh', overflow: 'scroll' }}>
			<Box
				sx={{
					position: 'sticky',
					top: 0,
					backgroundColor: '#fff',
					zIndex: 100,
				}}
			>
				<Typography variant="h4" align="center" p={2}>
					{headerLabel}
				</Typography>
				<Divider />
			</Box>

			<Grid container direction="column" p={2}>
				{children}
			</Grid>
		</Box>
	)
}
