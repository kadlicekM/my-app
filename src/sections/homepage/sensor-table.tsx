import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { Table } from 'components/table/table'
import { TableColumn } from 'components/table/types'
import { Sensor, SensorType } from 'models'

const data: Array<Sensor> = [
	{
		id: '1',
		sensor: 'FAKOE123',
		sector: 'kitchen',
		area: 'house',
		sensor_types: [
			{
				id: '1',
				note: 'pressure',
				min_value: '50',
				max_value: '110',
				unit: 'kPa',
			},
			{
				id: '3',
				note: 'temperature',
				min_value: '-40',
				max_value: '150',
				unit: 'C',
			},
		],
	},
	{
		id: '2',
		sensor: 'EEBNNN',
		sector: 'living_room',
		area: 'house',
		sensor_types: [
			{
				id: '2',
				note: 'humidity',
				min_value: '0',
				max_value: '100',
				unit: '%',
			},
			{
				id: '3',
				note: 'temperature',
				min_value: '-40',
				max_value: '150',
				unit: 'C',
			},
		],
	},
	{
		id: '3',
		sensor: 'CXZC0123',
		sector: 'bedroom',
		area: 'house',
		sensor_types: [
			{
				id: '1',
				note: 'pressure',
				min_value: '50',
				max_value: '110',
				unit: 'kPa',
			},
			{
				id: '3',
				note: 'temperature',
				min_value: '-40',
				max_value: '150',
				unit: 'C',
			},
		],
	},
]

const columns: Array<TableColumn<Sensor>> = [
	{
		label: 'ID',
		selector: 'id',
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
			const handleDelete = () => {
				alert(rowData.id)
			}

			return (
				<IconButton onClick={handleDelete}>
					<DeleteForeverIcon color="primary" />
				</IconButton>
			)
		},
	},
]

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

export function SensorTable() {
	return (
		<>
			<Typography variant="h4" mt={3} mb={2} sx={{ color: '#ef5350' }}>
				Prehľadová tabuľka
			</Typography>

			<Table
				data={data}
				columns={columns}
				ExtendContent={SensorTableExtendComponent}
			/>
		</>
	)
}
