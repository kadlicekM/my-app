import { FormProvider, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { FormTextField } from 'components/form/form-text-field'

export function SensorForm() {
	const form = useForm()

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(() => console.log('senzor form'))}>
				<Typography
					variant="h4"
					mb={2}
					sx={{ color: theme => theme.palette.primary.main }}
				>
					Pridanie senzora
				</Typography>

				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center" //doesnt work ..why?
				>
					<Grid container height="250px">
						<Grid item xs={6} paddingBottom={0}>
							<FormTextField
								sx={{ height: '90px' }}
								label="Názov senzora"
								name="name"
							/>
							<FormTextField
								sx={{ height: '90px' }}
								label="Minimálna hodnota"
								name="minValue"
							/>
							<FormTextField
								sx={{ height: '90px' }}
								label="Maximálna hodnota"
								name="maxValue"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormTextField
								sx={{ height: '90px' }}
								label="Jednotka"
								name="unit"
							/>
						</Grid>
					</Grid>

					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ mt: 2, width: '40%', justifyContent: 'center' }}
					>
						Submit
					</Button>
				</Box>
			</form>
		</FormProvider>
	)
}
