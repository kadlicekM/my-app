import { TableCellProps } from '@mui/material/TableCell'

// table extend content props (we pass it as Component so we need to pass data into it in order to work with them)
export type ExtendContentProps<T> = {
	data: T
}

// table column structure
export type TableColumn<T> = {
	// for getting concrete portion of the rowData
	selector: string
	label: string
	width?: number
	align?: TableCellProps['align']
	Cell?: ({ rowData }: { rowData: T }) => JSX.Element
}

export type DomainObject = {
	id: string
}
