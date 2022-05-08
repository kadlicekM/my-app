import { Page } from 'components/page/page'
import Box from '@mui/material/Box'
import { Button, Grid, Typography } from '@mui/material'
import BasicTable from 'sections/configuration/sensor-table'

import { yupResolver } from '@hookform/resolvers/yup'
import { SchemaOf, string, object } from 'yup'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import { ReactHookFormTextFieldContainer } from 'sections/configuration/RHFcontainer'

interface IFormProps {
	name: string
	message: string
}

const formSchema: SchemaOf<IFormProps> = object({
	name: string().required('Name is required'),
	message: string().required('Message is required'),
})

export function Config() {
	const methods = useForm<IFormProps>({
		resolver: yupResolver(formSchema),
	})

	const onSubmit: SubmitHandler<IFormProps> = async (data: IFormProps) =>
		alert(JSON.stringify(data))

	//const onSubmit = (data: IFormProps) => alert(JSON.stringify(data))

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
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<Grid item xs={8}>
							<Typography variant="h4" m={3} sx={{ color: '#ef5350' }}>
								Pridanie senzora
							</Typography>
							<ReactHookFormTextFieldContainer
								label="Názov senzora"
								name="name"
							/>
							<Button type="submit" variant="contained" color="primary">
								Submit
							</Button>
						</Grid>
					</form>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<Grid item xs={4} flexBasis="60%">
							<Box display="flex" flexDirection="column">
								<Typography variant="h4" m={3} sx={{ color: '#ef5350' }}>
									Umiestnenie senzora
								</Typography>
								<ReactHookFormTextFieldContainer label="Message" name="jozko" />
							</Box>
						</Grid>
					</form>
				</FormProvider>
			</Grid>
		</Page>
	)
}
