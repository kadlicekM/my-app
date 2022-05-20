import { useState } from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Collapse from '@mui/material/Collapse'
import { get } from 'lodash'

import { DomainObject, ExtendContentProps, TableColumn } from './types'
import { DEFAULT_CELL_WIDTH } from './table'

type Props<T> = {
	rowData: T
	columns: Array<TableColumn<T>>
	ExtendContent?: (props: ExtendContentProps<T>) => JSX.Element
}

// T extends DomainObject means we pass object that has {id: string, ...T and res of Tobject properties} so we can use generic table
export function Row<T extends DomainObject>({
	rowData,
	columns,
	ExtendContent,
}: Props<T>) {
	const [open, setOpen] = useState(false)

	const hasExtendContent = ExtendContent !== undefined

	// check if the table has extent content, if yes cancel bottom border
	const rowStyle = hasExtendContent
		? {
				'& > *': { borderBottom: 'unset!important' },
		  }
		: undefined

	return (
		<>
			<TableRow sx={rowStyle}>
				{hasExtendContent && (
					<TableCell width={20}>
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpen(!open)}
						>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
				)}
				{/** we map columns because we display data like in matrix
				 *
				 * Example:
				 *
				 * 				Col1 	Col2	Col3	...
				 * Row1 	R1C1	R1C2	R1C3	...
				 *
				 * Each column has its selector, we get this data by calling:
				 *
				 * get(rowData, selector, '-')
				 *
				 * - get - helper function from lodash (1st argument = target object, 2nd arg = property name, 3rd = default value, which will be returned in case that object[selector] is undefined)
				 *
				 */}
				{columns.map(
					({ selector, width = DEFAULT_CELL_WIDTH, align, Cell }) => {
						if (Cell) {
							return (
								<TableCell
									key={`${rowData.id}_${selector}`}
									width={width}
									align={align}
								>
									<Cell rowData={rowData} />
								</TableCell>
							)
						}

						return (
							<TableCell
								key={`${rowData.id}_${selector}`}
								width={width}
								align={align}
							>
								{get(rowData, selector, '-')}
							</TableCell>
						)
					},
				)}
			</TableRow>

			{/**
			 * 	Display extend component with expandable row.
			 *
			 * 	<ExtendContent data={rowData} /> is component, we pass from Table component (1 lvl above)
			 *
			 * 	we need to pass rowData into it, so we can work with them inside our desired ExtendComponent
			 *
			 * 	see sensor-table.tsx file (SensorTableExtendComponent)
			 *
			 */}
			{hasExtendContent && (
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<ExtendContent data={rowData} />
						</Collapse>
					</TableCell>
				</TableRow>
			)}
		</>
	)
}
