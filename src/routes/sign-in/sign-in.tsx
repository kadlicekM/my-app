import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Textfield from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as Bottom } from 'images/bottom.svg'

const schema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().min(12, 'Min 12 znakov').required('Required'),
})

type SignUpValues = {
	username: string
	password: string
}

export function SignIn() {
	const {
		control,
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
		>
			<Typography variant="h2" sx={{ mb: 2 }}>
				Prihlásenie
			</Typography>
			{/* <Divider /> nefunguje */}

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					display="flex"
					justifyContent="space-evenly"
					alignItems="center"
					flexDirection="column"
					flexWrap="wrap"
					width="430px"
					height="25vh"
					sx={{ boxShadow: 6, borderRadius: 2, bgcolor: 'whitesmoke' }}
					//boxShadow="2"
				>
					<Controller
						name="username"
						control={control}
						render={({ field }) => (
							<Textfield
								{...field}
								label="Prihlasovacie meno"
								error={!!errors.username?.message}
								helperText={errors.username?.message}
								sx={{ width: '390px', mt: 1 }}
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<Textfield
								{...field}
								label="Heslo"
								error={!!errors.password?.message}
								helperText={errors.password?.message}
								sx={{ width: '390px' }}
							/>
						)}
					/>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						sx={{ width: '390px' }}
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
	)
}
