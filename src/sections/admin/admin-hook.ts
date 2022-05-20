import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { User } from 'components/user/types'

import { apiAuthFetch } from 'utils/fetch'

const mockData: Array<User> = [
	{
		id: '1',
		login: 'test1',
		active: false,
		role: 'USER',
	},
	{
		id: '2',
		login: 'test2',
		active: true,
		role: 'ADMIN',
	},
]

export async function activateUser(id: string) {
	const result = await apiAuthFetch<{ ok: boolean }>(
		'http://localhost:5000/api/users/activated',
		{
			method: 'POST',
			body: JSON.stringify({ user_id: id, is_active: false }),
		},
	)

	if (result?.ok) {
		toast('Uzivatel bol uspesne aktivovany', { type: 'success' })
	} else {
		toast('Uzivatela sa nepodarilo aktivovat', { type: 'error' })
	}
}

export async function deactivateUser(id: string) {
	const result = await apiAuthFetch<{ ok: boolean }>(
		'http://localhost:5000/api/users/activated',
		{
			method: 'POST',
			body: JSON.stringify({ user_id: id, is_active: true }),
		},
	)

	if (result?.ok) {
		toast('Uzivatel bol uspesne deaktivovany', { type: 'success' })
	} else {
		toast('Uzivatela sa nepodarilo deaktivovat', { type: 'error' })
	}
}

export function useAdminPage() {
	const [userData, setUserData] = useState<Array<User>>(mockData)

	async function getUsers() {
		const users = await apiAuthFetch<Array<User>>(
			'http://localhost:5000/api/users/all',
		)

		if (users && users.length > 0) {
			setUserData(users)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])

	return {
		userData,
		getUsers,
	}
}
