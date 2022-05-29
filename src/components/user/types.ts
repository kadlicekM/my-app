import { SignUpValues } from 'routes/sign-up/sign-up'

export type User = {
	login: string
	id: string //change to uid later
	active: boolean
	role: 'ADMIN' | 'USER'
}

export type JWT = {
	[x: string]: unknown
	sub?: User
}
export type AuthResult = {
	access_token: string
	logged: boolean
	refresh_token: string
}

export type UserContextType = {
	user?: User
	loginUser: (username: string, password: string) => Promise<void>
	logoutUser: () => void
	signUp: (data: SignUpValues) => Promise<void>
}
