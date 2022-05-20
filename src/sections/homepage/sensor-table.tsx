import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { Table } from 'components/table/table'
import { TableColumn } from 'components/table/types'
import { Sensor, SensorType, Result } from 'models'
import { apiAuthFetch } from 'utils/fetch'
import { toast } from 'react-toastify'

const useColumns = (
	refreshFn: () => Promise<void>,
): Array<TableColumn<Sensor>> => {
	return [
		{
			label: 'UID',
			selector: 'uid',
		},
		{
			label: 'Sensor name',
			selector: 'sensor',
		},
		{
			label: 'Area',
			selector: 'area',
		},
		{
			label: 'Sector',
			selector: 'sector',
		},
		{
			label: 'Actions',
			selector: '',
			Cell: ({ rowData }) => {
				const handleDelete = async () => {
					const res = await apiAuthFetch<Result<unknown>>(
						'http://localhost:5000/api/sensor/delete',
						{
							method: 'DELETE',
							body: JSON.stringify({ id: rowData.id }),
						},
					)

					if (res?.ok) {
						console.log('uspesne')
						refreshFn()
					} else {
						toast('zle', { type: 'error' })
					}
				}

				return (
					<IconButton onClick={handleDelete}>
						<DeleteForeverIcon color="primary" />
					</IconButton>
				)
			},
		},
	]
}

const sensorTypesColumns: Array<TableColumn<SensorType>> = [
	{
		selector: 'note',
		label: 'Note',
	},
	{
		label: 'Min. value',
		selector: 'min_value',
	},
	{
		label: 'Max. value',
		selector: 'max_value',
	},
	{
		label: 'Unit',
		selector: 'unit',
	},
]

type SensorExtendContent = {
	data: Sensor
}

function SensorTableExtendComponent({ data }: SensorExtendContent) {
	//extended table data is just sensor_types array in this case
	const extentedTableData = data['sensor_types']

	return (
		<Box ml={8}>
			<Typography mb={1} variant="h5">
				Sensor types
			</Typography>

			<Table
				ContainerComponent={Box}
				data={extentedTableData}
				columns={sensorTypesColumns}
				size="small"
				sx={{ mb: 2, maxWidth: 750 }}
			/>
		</Box>
	)
}

type Props = {
	data: Array<Sensor>
	refreshData: () => Promise<void>
}

export function SensorTable({ data, refreshData }: Props) {
	return (
		<>
			<Typography variant="h4" mt={3} mb={2} sx={{ color: '#ef5350' }}>
				Prehľadová tabuľka
			</Typography>

			<Table
				data={data}
				columns={useColumns(refreshData)}
				ExtendContent={SensorTableExtendComponent}
			/>
		</>
	)
}
