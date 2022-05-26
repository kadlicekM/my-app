import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { LabeledValue } from 'components/form/form-select-field'
import { AreaResult } from 'models'
import { apiAuthFetch } from 'utils/fetch'

export function useConfiguration() {
	const [areaOptions, setAreaOptions] = useState<LabeledValue[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function getAreaOptions() {
		setIsLoading(true)

		const res = await apiAuthFetch<AreaResult>(
			'http://localhost:5000/api/area/getAll',
		)

		if (res?.areas) {
			setAreaOptions(res.areas ?? [])
		}

		setIsLoading(false)
	}

	async function createArea(name: string) {
		const res = await apiAuthFetch('http://localhost:5000/api/area', {
			method: 'POST',
			body: JSON.stringify({ description: name }),
		})

		if (res) {
			getAreaOptions()
		} else {
			toast('Area bola pridaná', {
				type: 'success',
			})
		}
	}

	useEffect(() => {
		getAreaOptions()
	}, [])

	async function createSector(name: string) {
		const res = await apiAuthFetch('http://localhost:5000/api/area', {
			method: 'POST',
			body: JSON.stringify({ description: name }),
		})

		if (res) {
			getAreaOptions()
		} else {
			toast('Sektor bol pridaný', {
				type: 'success',
			})
		}
	}

	async function createSensor(name: string) {
		const res = await apiAuthFetch('http://localhost:5000/api/area', {
			method: 'POST',
			body: JSON.stringify({ description: name }),
		})

		if (res) {
			getAreaOptions()
		} else {
			toast('Senzor bol pridaný', {
				type: 'success',
			})
		}
	}
	return {
		isLoading,
		areaOptions,
		createArea,
		createSector,
		createSensor,
	}
}
