import { UserContext } from './userContext'
import { useUser } from './userHook'

type Props = {
	children: React.ReactNode
}

export function UserContextProvider({ children }: Props) {
	const userCtx = useUser() //here will be stored info about user

	return <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
}
