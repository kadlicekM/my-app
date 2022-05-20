import { useState, useEffect } from 'react'

import { Sensor, Result } from 'models'
import { apiAuthFetch } from 'utils/fetch'

export function useHomePageData() {
	const [data, setData] = useState<Array<Sensor>>([])

	async function getHomepageData() {
		const res = await apiAuthFetch<Result<Array<Sensor>>>(
			'http://localhost:5000/api/sensor/getAll',
		)

		if (res) {
			setData(res.data)
		}
	}

	useEffect(() => {
		getHomepageData()
		// eslint-disable-next-line
	}, [])

	return {
		data,
		getHomepageData,
	}
}
