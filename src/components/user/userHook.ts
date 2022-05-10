import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import { AuthResult, User, UserContextType } from './types'

export const useUser = (): UserContextType => {
	const navigate = useNavigate()

	const [user, setUser] = useState<User>()

	async function login(username: string, password: string) {
		if (!username || !password) {
			return
		}

		try {
			const response = await fetch('http://localhost:5000/api/auth', {
				method: 'POST',
				body: JSON.stringify({ login: username, password }),
			})

			const result: AuthResult = await response.json()

			const user = jwt_decode<User>(result.access_token)

			if (user.isActive) {
				localStorage.setItem('token', result.access_token)
				setUser(user)
				navigate('/')
			}
		} catch (e) {
			console.error(e)
		}
	}

	async function logout() {
		setUser(undefined)
		localStorage.removeItem('token')
		navigate('/sign-in')
	}
	//subscribe to
	return {
		user,
		loginUser: login,
		logoutUser: logout,
	}
}
