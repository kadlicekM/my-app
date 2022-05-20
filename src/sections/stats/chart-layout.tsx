import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

import { Chart } from 'components/chart/chart'
import { FormProvider, useForm } from 'react-hook-form'
import { FormSelectField } from 'components/form/form-select-field'

export function ChartLayout() {
	const form = useForm()

	const onSubmit = (data: any) => console.log(data)

	return (
		<FormProvider {...form}>
			<Grid container mt={5}>
				<Grid item xs={12}>
					<form>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: 'repeat(5, 1fr)',
								gap: 2,
							}}
						>
							<FormSelectField
								name="area"
								label="Area"
								options={[]}
								fullwidth={false}
							/>
							<FormSelectField
								name="sector"
								label="Sector"
								options={[]}
								fullwidth={false}
							/>
							<FormSelectField
								name="sensor"
								label="Sensor"
								options={[]}
								fullwidth={false}
							/>
							<FormSelectField
								name="type"
								label="Typ"
								options={[]}
								fullwidth={false}
							/>
							<FormSelectField
								name="periodicity"
								label="Perioda"
								options={[]}
								fullwidth={false}
							/>
						</Box>

						<Button type="submit" onClick={() => {}}>
							Confirm
						</Button>
					</form>
				</Grid>
				<Grid item xs={12}>
					<Chart />
				</Grid>
			</Grid>
		</FormProvider>
	)
}
