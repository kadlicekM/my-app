import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, MenuItem } from '@mui/material'

import { Chart } from 'components/chart/chart'
import { useState } from 'react'

const sensors = [
	{ name: 'tlak', type: 'PRESSURE' },
	{ name: 'vlhkost', type: 'HUMIDITY' },
	{ name: 'teplota', type: 'TEMPERATURE' },
]

export function ChartLayout() {
	const [selectedSensor, setSelectedSensor] = useState<string>('')

	return (
		<Grid container mt={5}>
			<Grid item xs={9}>
				<Chart />
			</Grid>
			<Grid item xs={3}>
				<Box display="flex" flexDirection="column">
					<Select
						value={selectedSensor}
						onChange={e => {
							setSelectedSensor(e.target.value)
						}}
					>
						{sensors.map(item => (
							<MenuItem key={item.type} value={item.type}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</Box>

				<Button onClick={() => {}}>Confirm</Button>
			</Grid>
		</Grid>
	)
}
