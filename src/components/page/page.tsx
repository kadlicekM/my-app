import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Grid } from '@mui/material'

type PageProps = {
	headerLabel: string
	children: React.ReactNode
}

export function Page({ headerLabel, children }: PageProps) {
	return (
		<Grid container direction="row">
			<Grid item xs={12}>
				<Typography
					variant="h4"
					align="center"
					gutterBottom={true}
					//sx={{ display: 'flex', alignContent: 'center' }}
				>
					{headerLabel}
				</Typography>
				<Divider />
			</Grid>

			<Grid container direction="column">
				{children}
			</Grid>
		</Grid>
	)
}
