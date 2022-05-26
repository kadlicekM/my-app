import { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import DoneIcon from '@mui/icons-material/Done'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { UserContext } from 'components/user/userContext'
import { Table } from 'components/table/table'
import { TableColumn } from 'components/table/types'
import { User } from 'components/user/types'
import {
	activateUser,
	useAdminPage,
	deactivateUser,
} from 'sections/admin/admin-hook'

type ActivateCellProps = {
	rowData: User
}

function activateUserCell({ getUsers }: { getUsers: () => Promise<void> }) {
	return function ActivatedUserCell({ rowData }: ActivateCellProps) {
		const { active } = rowData

		const handleActivate = async () => {
			await activateUser(rowData.id)
			await getUsers()
		}

		const handleDeactivate = async () => {
			await deactivateUser(rowData.id)
			await getUsers()
		}

		const renderCellContent = () => {
			if (active) {
				return (
					<>
						<span>Ano</span>
						<IconButton size="small" onClick={handleDeactivate}>
							<DoDisturbIcon color="error" />
						</IconButton>
					</>
				)
			}

			return (
				<>
					<span>Nie</span>
					<IconButton size="small" onClick={handleActivate}>
						<DoneIcon color="success" />
					</IconButton>
				</>
			)
		}

		return (
			<Box
				display="flex"
				width={80}
				justifyContent="space-between"
				alignItems="center"
			>
				{renderCellContent()}
			</Box>
		)
	}
}

function useColumns({
	getUsers,
}: {
	getUsers: () => Promise<void>
}): Array<TableColumn<User>> {
	return [
		{
			selector: 'id',
			label: 'ID',
		},
		{
			selector: 'login',
			label: 'Užívateľske meno',
		},
		{
			selector: 'isActive',
			label: 'Aktivovaný',
			Cell: activateUserCell({ getUsers }),
		},
		{
			selector: 'role',
			label: 'Rola',
		},
	]
}

export function Admin() {
	const { user } = useContext(UserContext)

	const { userData, getUsers } = useAdminPage()

	// if (user?.role !== 'ADMIN') {
	// 	return <Navigate to={ROUTES.home} />
	// }

	return (
		<Box>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pl={2}
				pr={2}
				pt={1}
				pb={1}
				sx={{
					backgroundColor: theme => theme.palette.primary.main,
					color: '#fff',
				}}
			>
				<Typography variant="h1" fontWeight="regular" fontSize={45}>
					User list
				</Typography>
				<Typography></Typography>
			</Box>

			<Box p={2}>
				<Table data={userData} columns={useColumns({ getUsers })} />
			</Box>
		</Box>
	)
}
