import { Page } from 'components/page/page'
import { SensorTable } from 'sections/homepage/sensor-table'

import { useHomePageData } from './homepage-hook'

export function Homepage() {
	const { data, getHomepageData } = useHomePageData()

	return (
		<Page headerLabel="Hlavna stranka">
			<SensorTable data={data} refreshData={getHomepageData} />
		</Page>
	)
}
