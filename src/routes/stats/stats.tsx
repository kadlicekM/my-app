import { Page } from 'components/page/page'
import { ChartLayout } from 'sections/stats/chart-layout'
import { Warning } from 'sections/stats/warning'

export function Charts() {
	const hasSensors = true

	// if user has no sensors
	if (!hasSensors) {
		return <Warning />
	}

	return (
		<Page headerLabel="Stats">
			<ChartLayout />
		</Page>
	)
}
