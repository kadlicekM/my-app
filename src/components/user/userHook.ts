import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { ROUTES } from 'constants/routes'

import { AuthResult, User, UserContextType, JWT } from './types'

export const useUser = (): UserContextType => {
	const navigate = useNavigate()

	const [user, setUser] = useState<User>()

	// useEffect(() => {
	// 	if (!user) {
	// 		navigate(ROUTES.signIn)
	// 	}
	// }, [user, navigate])

	async function login(username: string, password: string) {
		if (!username || !password) {
			return
		}

		try {
			const response = await fetch('http://localhost:5000/api/auth', {
				method: 'POST',
				body: JSON.stringify({ login: username, password }),
				headers: {
					'Content-Type': 'application/json',
				},
			})

			const result: AuthResult = await response.json()

			const user = jwt_decode<JWT>(result.access_token).sub

			if (user?.active) {
				localStorage.setItem('token', result.access_token)
				setUser(user)

				if (user.role === 'ADMIN') {
					navigate(ROUTES.admin)

					return
				}

				navigate(ROUTES.home)
			}
		} catch (e) {
			console.error(e)
		}
	}

	async function logout() {
		setUser(undefined)
		localStorage.removeItem('token')
		navigate(ROUTES.signIn)
	}
	//subscribe to
	return {
		user,
		loginUser: login,
		logoutUser: logout,
	}
}
