import { useCallback } from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'
import { format } from 'date-fns'

// type Props = {
// 	sensor?: 'TEMPERATURE' | 'PRESURE' | 'HUMIDITY'
// 	periodicity?: 'HOURS' | 'DAYS' | 'WEEEKS' | 'MONTHS'
// }
type Props = {
	data: any
	periodicity?: 'hour' | 'day' | 'week' | 'month' | 'year'
}

// export function Chart({ sensor, periodicity }: Props) {
export function Chart({ data, periodicity }: Props) {
	// console.log(data.values)

	const tickFormatter = useCallback(
		(value: number | 'auto') => {
			if (!value || value === 'auto') {
				return ''
			}

			if (periodicity === 'hour') {
				return format(new Date(value), 'dd.MM hh:mm')
			}

			return format(new Date(value), 'dd.MM')
		},
		[periodicity],
	)

	return (
		<ResponsiveContainer height={600} minWidth={600} width="100%">
			<LineChart data={data ? data.values : {}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="timestamp" tickFormatter={tickFormatter} />
				<YAxis />
				<Tooltip />
				<Legend />

				<Line
					type="monotone"
					dataKey="value"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
