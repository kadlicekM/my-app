import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
	id: number,
	type: number,
	note: string,
	minValue: number,
	maxValue: number,
	sector: string,
) {
	return { id, type, note, minValue, maxValue, sector }
}

const rows = [
	createData(1, 1, 'teplota', 10, 20, 'kuchyna'),
	createData(2, 2, 'vlhkosť', 0, 100, 'obyvacka'),
	createData(3, 3, 'tlak', 1000, 1200, 'kotolna'),
	createData(4, 1, 'teplota', 10, 20, 'kuchyna'),
]

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align="right">type</TableCell>
						<TableCell align="right">note</TableCell>
						<TableCell align="right">minValue&nbsp;(°C)</TableCell>
						<TableCell align="right">maxValue&nbsp;(°C)</TableCell>
						<TableCell align="right">Sector</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.id}
							</TableCell>
							<TableCell align="right">{row.type}</TableCell>
							<TableCell align="right">{row.note}</TableCell>
							<TableCell align="right">{row.minValue}</TableCell>
							<TableCell align="right">{row.maxValue}</TableCell>
							<TableCell align="right">{row.sector}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
