import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import { Layout } from './components/layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from 'routes/homepage/homepage'
import { Charts } from 'routes/stats/stats'
import { Config } from 'routes/configuration/config'
import { SignUpForm } from 'routes/sign-up/sign-up'
import { SignIn } from 'routes/sign-in/sign-in'
import { createTheme, ThemeProvider } from '@mui/material'
import { UserContextProvider } from 'components/user/userContextProvider'
import { ROUTES } from 'constants/routes'
import { Admin } from 'routes/admin/admin'

const theme = createTheme({
	palette: {
		primary: {
			main: '#f44336',
		},
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<UserContextProvider>
					<Routes>
						<Route path={ROUTES.signIn} element={<SignIn />} />
						<Route path={ROUTES.signUp} element={<SignUpForm />} />

						<Route path={ROUTES.admin} element={<Admin />} />

						<Route path={ROUTES.home} element={<Layout />}>
							<Route index element={<Homepage />} />
							<Route element={<Charts />} path={ROUTES.charts} />
							<Route element={<Config />} path={ROUTES.config} />
						</Route>

						<Route element={<>404 | Stranka neexistuje</>} path={ROUTES[404]} />
					</Routes>
				</UserContextProvider>
			</BrowserRouter>

			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
			/>
		</ThemeProvider>
	)
}

export default App
