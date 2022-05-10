import { Controller, useFormContext } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { SxProps, Theme } from '@mui/material'

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
}

export function FormSelectField({ name, label, options, sx, disabled }: Props) {
	const form = useFormContext()

	if (!form) {
		throw new Error('No form found. Please wrap component with form provider.')
	}

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field }) => (
				<Select
					{...field}
					sx={sx}
					label={label}
					defaultValue={''}
					variant="outlined"
					error={!!form.formState.errors[name]}
					disabled={disabled}
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
			)}
		/>
	)
}
