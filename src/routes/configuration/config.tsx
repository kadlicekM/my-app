import { Page } from 'components/page/page'
import Box from '@mui/material/Box'
import { Grid, Typography } from '@mui/material'
import BasicTable from 'sections/configuration/sensor-table'

import { SensorForm } from 'sections/configuration/sensor-form'
import { AreaForm } from 'sections/configuration/area-form'
import { SectorForm } from 'sections/configuration/sector-form'
import { useConfiguration } from 'sections/configuration/config-hook'

// const formSchema: SchemaOf<IFormProps> = object({
// 	name: string().required('Zadaj názov senzoru'),
// 	minValue: number()
// 		.required('Zadaj minimálnu hodnotu rozsahu')
// 		.typeError('Zadaj číslo'),
// 	maxValue: number()
// 		.required('Zadaj maximálnu hodnotu rozsahu')
// 		.typeError('Zadaj číslo'),
// 	unit: string().required('Zadaj jednotku merania'),
// 	area: string().required('Zadaj názov priestora'),

// 	//message: string().required('Message is required'),
// })

export function Config() {
	const { areaOptions, createArea, isLoading } = useConfiguration()

	return (
		<Page headerLabel="Konfigurácia">
			<Typography variant="h4" mt={3} ml={3} mr={3} sx={{ color: '#ef5350' }}>
				Prehľadová tabuľka
			</Typography>
			<Box sx={{ m: 3 }}>
				<BasicTable />
			</Box>
			<Grid container pr={3} pl={3} mt={3} mb={3}>
				<Grid item xs={6}>
					<SensorForm />
				</Grid>
				<Grid item xs={6}>
					<AreaForm createFunction={createArea} />
					<SectorForm areaOptions={areaOptions} isAreaLoading={isLoading} />
				</Grid>
			</Grid>
		</Page>
	)
}
