import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { SxProps, Theme } from '@mui/material'
import {
	OverridableComponent,
	OverridableTypeMap,
} from '@mui/material/OverridableComponent'

import { DomainObject, TableColumn, ExtendContentProps } from './types'
import { Row } from './table-row'

export type Props<T extends DomainObject> = {
	// we need specify data
	data: Array<T>
	// table columns
	columns: Array<TableColumn<T>>
	// component which will appear after expanding row
	ExtendContent?: (props: ExtendContentProps<T>) => JSX.Element
	// table container component, default is Paper
	ContainerComponent?: OverridableComponent<OverridableTypeMap>
	// size of the table
	size?: 'small' | 'medium'
	// additional styles for MuiTable component
	sx?: SxProps<Theme>
}

export const DEFAULT_CELL_WIDTH = 60

export function Table<T extends DomainObject>({
	data,
	columns,
	ExtendContent,
	ContainerComponent,
	size,
	sx,
}: Props<T>) {
	const hasExtendContent = ExtendContent !== undefined

	return (
		<TableContainer component={ContainerComponent ?? Paper}>
			<MuiTable
				sx={{ minWidth: 650, ...sx }}
				aria-label="simple table"
				size={size}
			>
				<TableHead>
					<TableRow>
						{hasExtendContent && <TableCell width={20} />}
						{columns.map(({ label, align, width = DEFAULT_CELL_WIDTH }) => (
							<TableCell key={label} align={align} width={width}>
								<b>{label}</b>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(row => (
						<Row
							key={row.id}
							rowData={row}
							columns={columns}
							ExtendContent={ExtendContent}
						/>
					))}
				</TableBody>
			</MuiTable>
		</TableContainer>
	)
}
