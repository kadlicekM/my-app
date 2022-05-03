import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'

type Props = {
	label: string
	typ: string
}

export default function RegForm({ label, typ }: Props) {
	return <TextField label={label} variant="outlined" type={typ} />
}
