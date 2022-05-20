import { Controller, useFormContext } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { SxProps, Theme } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'

export type LabeledValue = {
	value: string
	label: string
}

type Props = {
	name: string
	label: string
	options: LabeledValue[]
	sx?: SxProps<Theme>
	disabled?: boolean
	fullwidth?: boolean
}

export function FormSelectField({
	name,
	label,
	options,
	sx,
	disabled,
	fullwidth = true,
}: Props) {
	const form = useFormContext()

	if (!form) {
		throw new Error('No form found. Please wrap component with form provider.')
	}

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field }) => (
				<>
					<InputLabel sx={{ fontSize: 12 }}>{label}</InputLabel>
					<Select
						{...field}
						sx={{ ...sx }}
						variant="standard"
						label={label}
						error={!!form.formState.errors[name]}
						disabled={disabled}
						fullWidth={fullwidth}
						defaultValue={''}
					>
						{options.length === 0 && (
							<MenuItem value="" disabled>
								Žiadne možnosti
							</MenuItem>
						)}

						{options.map(({ value, label }) => (
							<MenuItem key={value} value={value}>
								{label}
							</MenuItem>
						))}
					</Select>
				</>
			)}
		/>
	)
}
