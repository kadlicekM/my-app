import './App.css'
import { Layout } from './components/layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from 'routes/homepage/homepage'
import { Stats } from 'routes/stats/stats'
import { Config } from 'routes/configuration/config'
import { SignUpForm } from 'routes/sign-up/sign-up'
import { SignIn } from 'routes/sign-in/sign-in'
import { createTheme, ThemeProvider } from '@mui/material'
import { UserContextProvider } from 'components/user/userContextProvider'

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
						<Route path="/sign-in" element={<SignIn />} />
						<Route path="/sign-up" element={<SignUpForm />} />

						<Route path="/" element={<Layout />}>
							<Route index element={<Homepage />} />
							<Route element={<Stats />} path="grafy" />
							<Route element={<Config />} path="konfiguracia" />
						</Route>

						<Route element={<>hups! 404 </>} path="*" />
					</Routes>
				</UserContextProvider>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
