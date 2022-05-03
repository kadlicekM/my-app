import { Page } from 'components/page/page'
import { ContentBox } from 'components/box/box'
import { Row } from 'components/row/row'
import { ChartLayout } from 'sections/stats/chart-layout'
import { Warning } from 'sections/stats/warning'

export function Stats() {
	const hasSensors = true

	// if user has no sensors
	if (!hasSensors) {
		return <Warning />
	}

	return (
		<Page headerLabel="Stats">
			<ChartLayout />
			<ContentBox
				title="Max hodnoty"
				sx={{ maxWidth: '60%' }}
				headingSize="medium"
			>
				<Row label="Premierna hodnota" value={'20 C'} />
				<Row label="Maximalna hodnota" value={'30 C'} />
				<Row label="Minimalna hodnota" value={'10 C'} />
			</ContentBox>
		</Page>
	)
}
