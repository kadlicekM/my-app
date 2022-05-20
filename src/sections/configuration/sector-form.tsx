import { FormProvider, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { FormTextField } from 'components/form/form-text-field'
import {
	FormSelectField,
	LabeledValue,
} from 'components/form/form-select-field'

type Props = {
	areaOptions: LabeledValue[]
	isAreaLoading: boolean
}

export function SectorForm({ areaOptions, isAreaLoading }: Props) {
	const form = useForm()

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(() => console.log('sector form'))}>
				<Typography
					variant="h4"
					sx={{ color: theme => theme.palette.primary.main }}
					mb={2}
					mt={3}
				>
					Pridanie sektora
				</Typography>
				<Box display="flex" flexDirection="column">
					<Grid container alignItems="center">
						<Grid item xs={6}>
							<FormSelectField
								label="Priestor"
								sx={{ minWidth: 250 }}
								name="area"
								options={areaOptions}
								disabled={isAreaLoading}
							/>
						</Grid>
						<Grid item xs={6}>
							<FormTextField label="Sektor" name="sector" />
						</Grid>
					</Grid>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ width: '40%', justifyContent: 'center' }}
					>
						Submit
					</Button>
				</Box>
			</form>
		</FormProvider>
	)
}
