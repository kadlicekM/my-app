import { Page } from 'components/page/page'
import { SensorArea } from 'sections/homepage/sensor-area'
import { SensorCount } from 'sections/homepage/sensor-count'
import { SensorInfo } from 'sections/homepage/sensor-info'
import { apiAuthFetch } from 'utils/fetch'
import { useEffect } from 'react'

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
		<Page headerLabel=" Hlavna stranka">
			<SensorInfo />
			<SensorCount />
			<SensorArea />
		</Page>
	)
}
