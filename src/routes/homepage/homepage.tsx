import { Page } from 'components/page/page'
import { ContentBox } from 'components/box/box'
import { Row } from 'components/row/row'
import { SensorArea } from 'sections/homepage/sensor-area'
import { SensorCount } from 'sections/homepage/sensor-count'
import { SensorInfo } from 'sections/homepage/sensor-info'

export function Homepage() {
	return (
		<Page headerLabel=" Hlavna stranka">
			<SensorInfo />
			<SensorCount />
			<SensorArea />
		</Page>
	)
}
