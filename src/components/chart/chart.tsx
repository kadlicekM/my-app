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

// type Props = {
// 	sensor?: 'TEMPERATURE' | 'PRESURE' | 'HUMIDITY'
// 	periodicity?: 'HOURS' | 'DAYS' | 'WEEEKS' | 'MONTHS'
// }
type Props = {
	data: any
}

// export function Chart({ sensor, periodicity }: Props) {
export function Chart({ data }: Props) {
	// console.log(data.values)
	return (
		<ResponsiveContainer height={600} minWidth={600} width="100%">
			<LineChart data={data ? data.values : {}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />

				<Line
					type="monotone"
					dataKey="value"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>

				{/* <Line
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					activeDot={{ r: 8 }}
				/> */}
			</LineChart>
		</ResponsiveContainer>
	)
}
