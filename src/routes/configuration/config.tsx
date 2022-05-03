import { Page } from 'components/page/page'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { MyForm } from 'components/form/form'
import BasicTable from 'sections/configuration/sensor-table'
import RegisterForm from 'components/registerForm/register-form'
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
			<div>
				<MyForm
					onSubmit={({ id, type, note, minValue, maxValue, sector }) => {
						console.log(id, type, note, minValue, maxValue, sector)
					}}
				/>
			</div>
			<RegisterForm />
		</Page>
	)
}
