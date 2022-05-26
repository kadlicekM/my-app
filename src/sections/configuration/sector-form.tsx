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
	createFunction: (name: string) => Promise<void>
}

export function SectorForm({
	areaOptions,
	isAreaLoading,
	createFunction,
}: Props) {
	const form = useForm()

	const onSubmit = async (data: any) => {
		await createFunction(data.sector)
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Typography
					variant="h4"
					sx={{ color: theme => theme.palette.primary.main }}
					mt={3}
					pl={2}
				>
					Pridanie sektora
				</Typography>
				<Box
					display="flex"
					flexDirection="column"
					marginTop="30px"
					paddingLeft="16px"
				>
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
							<FormTextField
								label="Názov sektoru"
								name="sector"
								sx={{ marginTop: '22px' }}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ width: '40%', justifyContent: 'center' }}
					>
						Pridať
					</Button>
				</Box>
			</form>
		</FormProvider>
	)
}
