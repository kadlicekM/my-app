import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { LabeledValue } from 'components/form/form-select-field'
import { apiAuthFetch } from 'utils/fetch'
import { AreaResult } from './types'

export function useConfiguration() {
	const [areaOptions, setAreaOptions] = useState<LabeledValue[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function getAreaOptions() {
		setIsLoading(true)

		const res = await apiAuthFetch<AreaResult>(
			'http://localhost:5000/api/area/getAll',
		)

		// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined.
		const processedOptions: LabeledValue[] =
			res?.areas.map(({ id, description }) => ({
				value: id,
				label: description,
			})) ?? []

		if (processedOptions.length > 0) {
			setAreaOptions(processedOptions)
		}

		setIsLoading(false)
	}

	async function createArea(name: string) {
		const res = await apiAuthFetch('http://localhost:5000/api/area/getAll', {
			method: 'POST',
			body: JSON.stringify({ description: name }),
		})

		if (res) {
			getAreaOptions()
		} else {
			toast('Area sa nepodarila pridat', {
				type: 'error',
			})
		}
	}

	useEffect(() => {
		getAreaOptions()
	}, [])

	return {
		isLoading,
		areaOptions,
		createArea,
	}
}
