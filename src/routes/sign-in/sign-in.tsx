import { useForm, Controller, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Textfield from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as Bottom } from 'images/bottom.svg'
import { FormTextField } from 'components/form/form-text-field'
import { useContext } from 'react'
import { UserContextProvider } from 'components/user/userContextProvider'
import { UserContext } from 'components/user/userContext'

const schema = yup.object({
	username: yup.string().required('Používateľské meno je povinné'),
	password: yup
		.string()
		// .min(12, 'Zadané používateľské meno alebo heslo nie je platné')
		.required('Heslo je povinné'),
})

type SignUpValues = {
	username: string
	password: string
}

export function SignIn() {
	const form = useForm<SignUpValues>({
		resolver: yupResolver(schema),
		reValidateMode: 'onSubmit',
	})
	const subs = useContext(UserContext)
	const onSubmit = (data: SignUpValues) =>
		subs.loginUser(data.username, data.password)

	return (
		<FormProvider {...form}>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				height="100vh"
				sx={{ bgcolor: '#E5E5E5' }}
			>
				<Typography variant="h2" sx={{ mb: 2 }}>
					Prihlásenie
				</Typography>
				{/* <Divider /> nefunguje */}

				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Box
						display="flex"
						justifyContent="space-evenly"
						alignItems="center"
						flexDirection="column"
						flexWrap="wrap"
						width="400px"
						height="30vh"
						sx={{ boxShadow: 6, borderRadius: 2, bgcolor: 'whitesmoke' }}
						//boxShadow="2"
					>
						<Grid container direction="column" alignContent="center">
							<Grid item width="300px">
								<FormTextField
									label="Prihlasovacie meno"
									name="username"
									sx={{ mt: 1 }}
								/>
							</Grid>
							<Grid item width="300px">
								<FormTextField label="Heslo" name="password" type="password" />
							</Grid>
						</Grid>

						<Button
							type="submit"
							color="primary"
							variant="contained"
							sx={{ width: '300px' }}
						>
							Prihlásiť
						</Button>
						<Link to="/sign-up">
							<Typography>Zaregistruj sa</Typography>
						</Link>
					</Box>
				</form>
				<Box position="absolute" bottom="0px">
					<Bottom />
				</Box>
			</Box>
		</FormProvider>
	)
}
