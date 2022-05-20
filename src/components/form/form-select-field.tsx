import { Controller, useFormContext } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { SxProps, Theme } from '@mui/material'
import Box from '@mui/material/Box'
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
	onChange?: () => void
}

export function FormSelectField({
	name,
	label,
	options,
	sx,
	disabled,
	onChange,
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
				<Box sx={{ width: 200, ...sx }} mb={2}>
					<InputLabel sx={{ fontSize: 12 }}>{label}</InputLabel>
					<Select
						{...field}
						variant="standard"
						onChange={e => {
							field.onChange(e)

							onChange?.()
						}}
						label={label}
						error={!!form.formState.errors[name]}
						disabled={disabled}
						fullWidth
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
				</Box>
			)}
		/>
	)
}
