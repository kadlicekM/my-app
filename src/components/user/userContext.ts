import { createContext } from 'react'
import { UserContextType } from './types'

//create context which has inside data about login and id + property loginUser and logoutUser
export const UserContext = createContext<UserContextType>(undefined as never)
