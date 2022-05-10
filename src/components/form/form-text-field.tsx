import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material'

type Props = {
	name: string
	label: string
	sx?: SxProps<Theme>
}

export function FormTextField({ name, label, sx }: Props) {
	const form = useFormContext()

	if (!form) {
		throw new Error('No form found. Please wrap component with form provider.')
	}

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field }) => (
				<TextField
					{...field}
					label={label}
					sx={{ ...sx }}
					variant="outlined"
					error={!!form.formState.errors[name]}
					helperText={form.formState.errors[name]?.message ?? ''}
				/>
			)}
		/>
	)
}
