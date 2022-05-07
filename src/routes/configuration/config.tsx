import { Page } from 'components/page/page'

import Box from '@mui/material/Box'
import { Grid, Typography } from '@mui/material'
import { MyForm } from 'components/form/form'
import BasicTable from 'sections/configuration/sensor-table'
export function Config() {
	return (
		<Page headerLabel=" Konfigurácia">
			<Typography variant="h4" m={3} sx={{ color: '#ef5350' }}>
				{' '}
				Prehľadová tabuľka
			</Typography>
			<Box sx={{ m: 3 }}>
				<BasicTable />
			</Box>
			{/* <div>
				<MyForm
					onSubmit={({ id, type, note, minValue, maxValue, sector }) => {
						console.log(id, type, note, minValue, maxValue, sector)
					}}
				/>
			</div> */}
			<Grid container>
				<Grid item xs={8}>
					<Typography variant="h4" m={3} sx={{ color: '#ef5350' }}>
						Pridanie senzora
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h4" m={3} sx={{ color: '#ef5350' }}>
						Umiestnenie senzora
					</Typography>
				</Grid>
			</Grid>
		</Page>
	)
}
