import { Select } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import RegForm from './register-field'

const roles = [{ name: 'používateľ', type: 'USER' }]

export default function RegisterForm() {
	const [selectedRole, setSelectedRole] = useState<string>('')

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
				width: '80%',
				height: '160px',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'flex-start',
				flexDirection: 'row',
				ml: 2,
			}}
			noValidate
			autoComplete="off"
		>
			<RegForm label="Meno" typ="text" />
			<RegForm label="Priezvisko" typ="text" />
			<RegForm label="Login" typ="text" />
			<RegForm label="Heslo" typ="password" />
			<Select></Select>
		</Box>
	)
}
