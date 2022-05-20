import { useEffect } from 'react'

import { Page } from 'components/page/page'
import { SensorTable } from 'sections/homepage/sensor-table'
import { apiAuthFetch } from 'utils/fetch'

export function Homepage() {
	useEffect(() => {
		async function getMyData() {
			const res = await apiAuthFetch(
				'https://jsonplaceholder.typicode.com/todos',
			)

			console.log({ res })
		}

		getMyData()
	}, [])

	return (
		<Page headerLabel="Hlavna stranka">
			<SensorTable />
		</Page>
	)
}
