// import { yupResolver } from '@hookform/resolvers/yup'
// import { Button, Grid } from '@mui/material'
// import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
// import { SchemaOf, string, object } from 'yup'
// import { ReactHookFormTextFieldContainer } from 'sections/configuration/RHFcontainer'

// interface IFormProps {
// 	name: string
// 	message: string
// }

// const formSchema: SchemaOf<IFormProps> = object({
// 	name: string().required('Name is required'),
// 	message: string().required('Message is required'),
// })

// export function FieldArrayForm() {
// 	const methods = useForm<IFormProps>({
// 		resolver: yupResolver(formSchema),
// 	})

// 	const submitRecipe: SubmitHandler<IFormProps> = async (data: IFormProps) => {
// 		console.log('data submitted', data)
// 	}

// 	return (
// 		<Grid container direction="column">
// 			<FormProvider {...methods}>
// 				<form onSubmit={methods.handleSubmit(submitRecipe)}>
// 					<Grid item>
// 						<ReactHookFormTextFieldContainer label="Name" name="name" />
// 					</Grid>
// 					<Grid item>
// 						<ReactHookFormTextFieldContainer label="Message" name="message" />
// 					</Grid>
// 					<Grid item>
// 						<Button type="submit" variant="contained" color="primary">
// 							Submit
// 						</Button>
// 					</Grid>
// 				</form>
// 			</FormProvider>
// 		</Grid>
// 	)
// }
export {}
