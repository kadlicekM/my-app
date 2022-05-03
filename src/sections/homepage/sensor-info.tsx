import { ContentBox } from 'components/box/box'
import { Row } from 'components/row/row'

export function SensorInfo() {
	return (
		<ContentBox title="Všeobecné informacie o senzore" sx={{ maxWidth: '70%' }}>
			<div>
				{[1, 2, 3, 4, 5].map((number, index) => (
					<Row
						key={number.toString()}
						label={`Row ${number}`}
						value={index?.toString()}
						withDivider={index !== 4}
					/>
				))}
			</div>
		</ContentBox>
	)
}
