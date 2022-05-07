import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Textfield from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
import { ReactComponent as Bottom } from 'images/bottom.svg'

const schema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().min(12, 'Min 12 znakov').required('Required'),
	passwordAgain: yup
		.string()
		.equals([yup.ref('password')], 'Zadané heslá nie sú rovnaké')
		.required(),
	name: yup.string().required('Povinné vyplniť'),
	surname: yup.string().required('Povinné vyplniť'),
	email: yup.string().required('Povinné vyplniť'),
})

type SignUpValues = {
	username: string
	password: string
	passwordAgain: string
	name: string
	surname: string
	email: string
}

export function SignUpForm() {
	const {
		control,
		// ref,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpValues>({
		resolver: yupResolver(schema),
		reValidateMode: 'onSubmit',
	})

	const onSubmit = (data: SignUpValues) => alert(JSON.stringify(data))

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			height="100vh"
			sx={{ bgcolor: '#E5E5E5' }}
			//sx={{ bgcolor: 'ghostwhite' }}
		>
			<Typography variant="h2" sx={{ mb: 2 }}>
				Registrácia
			</Typography>
			{/* <Divider /> nefunguje */}

			<Typography sx={{ mb: 4 }}>
				Zaregistruj sa do MKVisualization WebApp a maj aj Ty možnosť
				vizualizovať svoje dáta
			</Typography>

			<form onSubmit={handleSubmit(onSubmit)}>
				{' '}
				{/* onSubmit will be alerted data from form */}
				<Box
					sx={{
						boxShadow: 6,
						borderRadius: 2,
						bgcolor: 'whitesmoke',
						width: '560px',
					}}
				>
					<Grid
						container
						gap={3}
						flexWrap="nowrap"
						width="500px"
						marginLeft="30px"
						paddingTop="30px"
					>
						<Grid item xs={6} direction="column" display="flex">
							<Controller
								name="name"
								control={control}
								render={({ field }) => (
									<Textfield
										{...field}
										label="Meno"
										error={!!errors.name?.message}
										helperText={errors.name?.message}
										sx={{ mb: 3 }}
									/>
								)}
							/>
							<Controller
								name="surname"
								control={control}
								render={({ field }) => (
									<Textfield
										{...field}
										label="Priezvisko"
										error={!!errors.surname?.message} //? means when its valid when the error exists
										helperText={errors.surname?.message}
										sx={{ mb: 3 }}
									/>
								)}
							/>
							<Controller
								name="email"
								control={control}
								render={({ field }) => (
									<Textfield
										{...field}
										//type="email"
										label="Email"
										error={!!errors.email?.message}
										helperText={errors.email?.message}
										sx={{ mb: 3 }}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={6} direction="column" display="flex">
							<Controller
								name="username"
								control={control}
								render={({ field }) => (
									<Textfield
										{...field}
										label="Používateľské meno"
										error={!!errors.username?.message}
										helperText={errors.username?.message}
										sx={{ mb: 3 }}
									/>
								)}
							/>
							<Controller
								name="password"
								control={control}
								render={({ field }) => (
									<Textfield
										{...field}
										type="password"
										label="Heslo"
										error={!!errors.password?.message}
										helperText={errors.password?.message}
										sx={{ mb: 3 }}
									/>
								)}
							/>

							<Controller
								name="passwordAgain"
								control={control}
								render={({ field }) => (
									<Textfield
										{...field}
										label="Potvrdenie hesla"
										type="password"
										error={!!errors.passwordAgain?.message}
										helperText={errors.passwordAgain?.message}
										sx={{ mb: 3 }}
									/>
								)}
							/>
						</Grid>
					</Grid>
					<Box
						display="flex"
						justifyContent="center"
						mt={1}
						paddingBottom="25px"
					>
						<Button type="submit" variant="contained">
							Registrovať
						</Button>
					</Box>
				</Box>
			</form>
			<Box position="absolute" bottom="0px">
				<Bottom />
			</Box>
		</Box>
	)
}
