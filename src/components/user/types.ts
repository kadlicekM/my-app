export type User = {
	login: string
	id: string //change to uid later
	isActive: boolean
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
}
