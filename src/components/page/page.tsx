import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

type PageProps = {
	headerLabel: string
	children: React.ReactNode
}

export function Page({ headerLabel, children }: PageProps) {
	return (
		<Box>
			<Box>
				<Typography
					variant="h4"
					align="center"
					gutterBottom={true}
					//sx={{ display: 'flex', alignContent: 'center' }}
				>
					{headerLabel}
				</Typography>
				<Divider />
			</Box>

			<Box>{children}</Box>
		</Box>
	)
}
