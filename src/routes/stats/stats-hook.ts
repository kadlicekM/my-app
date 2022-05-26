import { useState, useEffect } from 'react'

import { Area, Result } from 'models'
import { apiAuthFetch } from 'utils/fetch'
import { LabeledValue } from 'components/form/form-select-field'

export function useStats() {
	const [areas, setAreas] = useState<Array<LabeledValue>>([])
	const [sectors, setSectors] = useState<Array<LabeledValue>>([])
	const [sensors, setSensors] = useState<Array<LabeledValue>>([])
	const [types, setTypes] = useState<Array<LabeledValue>>([])
	const [chartData, setChartData] = useState<any>({})

	console.log({ areas })

	useEffect(() => {
		setChartData({})
	}, [areas, sectors, sensors, types])

	async function getAreas() {
		const res = await apiAuthFetch<Result<Array<Area>>>(
			'http://localhost:5000/api/area',
		)

		console.log({ res })

		if (res?.ok) {
			setAreas(res.data)
			setSectors([])
			setSensors([])
			setTypes([])
		}
	}

	async function getSectors(areaId: number) {
		const res = await apiAuthFetch<Result<Array<LabeledValue>>>(
			'http://localhost:5000/api/sector',
			{ method: 'POST', body: JSON.stringify({ area_id: areaId }) },
		)

		if (res?.ok) {
			await setSectors(res.data)
			setSensors([])
			setTypes([])
		}
	}

	async function getSensors(sectorId: number) {
		const res = await apiAuthFetch<Result<Array<LabeledValue>>>(
			'http://localhost:5000/api/sensor',
			{ method: 'POST', body: JSON.stringify({ sector_id: sectorId }) },
		)

		if (res?.ok) {
			setSensors(res.data)
			setTypes([])
		}
	}

	async function getTypes(sensorId: number) {
		const res = await apiAuthFetch<Result<Array<LabeledValue>>>(
			'http://localhost:5000/api/sensor_type',
			{ method: 'POST', body: JSON.stringify({ sensor_id: sensorId }) },
		)

		if (res?.ok) {
			setTypes(res.data)
		}
	}

	useEffect(() => {
		getAreas()
	}, [])

	console.log(sectors)
	return {
		areas,
		sectors,
		sensors,
		types,
		chartData,
		getSectors,
		getSensors,
		getTypes,
		setChartData,
	}
}
