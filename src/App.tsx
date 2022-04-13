import './App.css'
import { Layout } from './components/layout/layout'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	)
}

export default App
