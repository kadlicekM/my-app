import { FormProvider, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { FormTextField } from 'components/form/form-text-field'

type Props = {
	createFunction: (name: string) => Promise<void>
}

type AreaFormValues = {
	area: string
}

export function AreaForm({ createFunction }: Props) {
	const form = useForm<AreaFormValues>({
		defaultValues: {
			area: '',
		},
	})

	const onSubmit = async (data: AreaFormValues) => {
		await createFunction(data.area)
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Typography
					variant="h4"
					sx={{ color: theme => theme.palette.primary.main }}
					mb={2}
				>
					Pridanie priestoru
				</Typography>
				<Box display="flex" flexDirection="column">
					<Grid container justifyContent="flex-start">
						<Grid item xs={6}>
							<FormTextField
								sx={{ height: '90px' }}
								label="Priestor"
								name="area"
							/>
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
