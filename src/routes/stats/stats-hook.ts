import { useState, useEffect } from 'react'

import { Area, Result } from 'models'
import { apiAuthFetch } from 'utils/fetch'
import { LabeledValue } from 'components/form/form-select-field'

export function useStats() {
	const [areas, setAreas] = useState<Array<LabeledValue>>([])
	const [sectors, setSectors] = useState<Array<LabeledValue>>([])
	const [sensors, setSensors] = useState<Array<LabeledValue>>([])
	const [types, setTypes] = useState<Array<LabeledValue>>([])

	console.log({ areas })

	async function getAreas() {
		const res = await apiAuthFetch<Result<Array<Area>>>(
			'http://localhost:5000/api/area/get',
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
			'http://localhost:5000/api/sector/get',
			{ method: 'POST', body: JSON.stringify({ area_id: areaId }) },
		)

		console.log({ res })
		if (res?.ok) {
			await setSectors(res.data)
			setSensors([])
			setTypes([])
		}
	}

	async function getSensors(sectorId: number) {
		const res = await apiAuthFetch<Result<Array<LabeledValue>>>(
			'http://localhost:5000/api/sensor/get',
			{ method: 'POST', body: JSON.stringify({ sector_id: sectorId }) },
		)

		if (res?.ok) {
			setSensors(res.data)
			setTypes([])
		}
	}

	async function getTypes(sensorId: number) {
		const res = await apiAuthFetch<Result<Array<LabeledValue>>>(
			'http://localhost:5000/api/sensor_type/get',
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
		getSectors,
		getSensors,
		getTypes,
	}
}