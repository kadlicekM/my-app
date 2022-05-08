import ReactHookFormTextFieldMemo from 'components/RHform/RHFmemo'
import { useFormContext } from 'react-hook-form'

interface RHFconteiner_Props {
	name: string
	label: string
}

export function ReactHookFormTextFieldContainer({
	name,
	label,
}: RHFconteiner_Props) {
	const methods = useFormContext()

	return (
		<ReactHookFormTextFieldMemo methods={methods} label={label} name={name} />
	)
}
