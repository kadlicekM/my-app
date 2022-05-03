import { TextField } from '@mui/material'
import { FieldProps } from 'formik'

interface Props extends FieldProps {
	label: string
}

export function MyField({ label, field }: Props) {
	return <TextField sx={{ margin: 1 }} label={label} {...field} />
}
