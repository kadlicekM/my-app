import { Button } from '@mui/material'
import { Form, Formik, Field } from 'formik'
import { MyField } from 'components/form/field'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
type Values = {
	id: number
	type: string
	note: string
	minValue: number
	maxValue: number
	sector: string
}

type Props = {
	onSubmit: (values: Values) => void
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#64748B',
		},
	},
})
export function MyForm({ onSubmit }: Props) {
	return (
		<ThemeProvider theme={theme}>
			<Formik
				initialValues={{
					id: 0,
					type: '',
					note: '',
					minValue: 0,
					maxValue: 0,
					sector: '',
				}}
				onSubmit={values => {
					onSubmit(values)
				}}
			>
				{({ values }) => (
					<Form>
						<Typography variant="h4" ml={3} mt={5} sx={{ color: '#ef5350' }}>
							{' '}
							Pridanie senzoru
						</Typography>
						<Box
							sx={{
								width: '80%',
								height: '160px',
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								flexDirection: 'row',
								ml: 2,
							}}
						>
							<Field
								maxWidht="30%"
								name="id"
								//placeholder="first name"
								label="ID"
								component={MyField}
							/>
							<Field
								name="type"
								//placeholder="first name"
								label="Type"
								component={MyField}
							/>
							<Field
								name="note"
								//placeholder="first name"
								label="Note"
								component={MyField}
							/>
							<Field
								name="minValue"
								//placeholder="first name"
								label="Min. Value"
								component={MyField}
							/>
							<Field
								name="maxValue"
								label="Max. Value"
								//placeholder="last name"
								component={MyField}
							/>
							<Field
								name="sector"
								//placeholder="first name"
								label="Sector"
								component={MyField}
							/>
						</Box>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							sx={{ ml: 2 }}
						>
							submit
						</Button>

						<pre>{JSON.stringify(values, null, 2)}</pre>
					</Form>
				)}
			</Formik>
		</ThemeProvider>
	)
}
