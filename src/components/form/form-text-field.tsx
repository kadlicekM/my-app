import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useFormContext } from 'react-hook-form'
import { Box, SxProps } from '@mui/system'
import { Theme } from '@mui/material'

type Props = {
	name: string
	label: string
	sx?: SxProps<Theme>
	type?: 'text' | 'number'
}

export function FormTextField({ name, label, sx, type = 'text' }: Props) {
	const form = useFormContext()

	if (!form) {
		throw new Error('No form found. Please wrap component with form provider.')
	}

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field }) => (
				<Box display="flex" flexDirection="column" mb={2} height={90}>
					<TextField
						{...field}
						label={label}
						sx={sx}
						variant="standard"
						error={!!form.formState.errors[name]}
						fullWidth
						defaultValue={''}
					/>
					<Typography>{form.formState.errors[name]?.message ?? ''}</Typography>
				</Box>
			)}
		/>
	)
}
