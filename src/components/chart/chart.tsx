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

const data = [
	{
		time: '9:00',
		uv: 4000,
		pv: 20,
	},
	{
		time: '10:00',
		uv: 3000,
		pv: 8000,
	},
	{
		time: '11:00',
		uv: 2000,
		pv: 6500,
	},
	{
		time: '12:00',
		uv: 2780,
		pv: 3000,
	},
	{
		time: '13:00',
		uv: 1890,
		pv: 1000,
	},
	{
		time: '14:00',
		uv: 2390,
		pv: 0,
	},
	{
		time: '15:00',
		uv: 3490,
		pv: 0,
	},
]

type Props = {
	sensor?: 'TEMPERATURE' | 'PRESURE' | 'HUMIDITY'
	periodicity?: 'HOURS' | 'DAYS' | 'WEEEKS' | 'MONTHS'
}

export function Chart({ sensor, periodicity }: Props) {
	return (
		<ResponsiveContainer height={800} minWidth={600} width="100%">
			<LineChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="time" />
				<YAxis />
				<Tooltip />
				<Legend />

				<Line
					type="monotone"
					dataKey="uv"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>

				<Line
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
