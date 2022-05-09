import { Page } from 'components/page/page'
import Box from '@mui/material/Box'
import { Button, Grid, Typography } from '@mui/material'
import BasicTable from 'sections/configuration/sensor-table'

import { yupResolver } from '@hookform/resolvers/yup'
import { SchemaOf, string, object } from 'yup'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
//import { ReactHookFormTextFieldContainer } from 'sections/configuration/RHFcontainer'
import { FormTextField } from 'components/form/formTextField'
import { number } from 'yup'
import { ToastContainer, toast } from 'react-toastify'

interface IFormProps {
	name: string
	//message: string
}

const formSchema: SchemaOf<IFormProps> = object({
	name: string().required('Zadaj názov senzoru'),
	minValue: number()
		.required('Zadaj minimálnu hodnotu rozsahu')
		.typeError('Zadaj číslo'),
	maxValue: number()
		.required('Zadaj maximálnu hodnotu rozsahu')
		.typeError('Zadaj číslo'),
	unit: string().required('Zadaj jednotku merania'),

	//message: string().required('Message is required'),
})

export function Config() {
	const form = useForm<IFormProps>({
		resolver: yupResolver(formSchema),
	})

	const onSubmit: SubmitHandler<IFormProps> = async (data: IFormProps) =>
		alert(JSON.stringify(data))

	//const onSubmit = (data: IFormProps) => alert(JSON.stringify(data))
	const notify = () => toast('Senzor bol úspešne pridaný') //try-catch block needed
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
			<Grid container pr={3} pl={3} mt={3} mb={3}>
				<Grid item xs={7}>
					<FormProvider {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<Typography
								variant="h4"
								mb={2}
								sx={{ color: theme => theme.palette.primary.main }}
							>
								Pridanie senzora
							</Typography>

							<Box display="flex" flexDirection="column">
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
									<Grid item>
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
				</Grid>
				<Grid item xs={5}>
					<Box display="flex" flexDirection="column">
						<Typography
							variant="h4"
							sx={{ color: theme => theme.palette.primary.main }}
							mb={3}
						>
							Umiestnenie senzora
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Page>
	)
}
