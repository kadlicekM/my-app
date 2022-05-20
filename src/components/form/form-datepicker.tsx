import { Controller, useFormContext } from 'react-hook-form'
import { SxProps, TextField, Theme } from '@mui/material'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type Props = {
	name: string
	label: string
	sx?: SxProps<Theme>
	disabled?: boolean
	maxDate?: Date
	minDate?: Date
	onChange?: (date: Date | null) => void
}

export function FormDatepicker({
	name,
	sx,
	label,
	maxDate,
	minDate,
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
					<DatePicker
						customInput={<TextField fullWidth variant="standard" />}
						placeholderText="Vyberte datum"
						onChange={date => {
							field.onChange(date)

							onChange?.(date)
						}}
						selected={field.value}
						dateFormat="dd.MM.yyyy"
						minDate={minDate}
						maxDate={maxDate}
					/>
				</Box>
			)}
		/>
	)
}
