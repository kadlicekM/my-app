import { Page } from 'components/page/page'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ContentBox } from 'components/box/box'
import { Row } from 'components/row/row'

const theme = createTheme({
	palette: {
		primary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba00d',
		},
	},
})
const pole = [1, 2, 3, 4, 5]
export function Chart() {
	return (
		<Page headerLabel=" Grafy">
			<ThemeProvider theme={theme}>
				<ContentBox title="Informacie o senzore" sx={{ maxWidth: '70%' }}>
					<div>
						{pole.map((number, index) => (
							<>
								<Row
									key={index.toString()}
									label={`Počet meracích senzorov: `}
									value={number?.toString()}
									withDivider={false}
								/>
								<Row
									key={index.toString()}
									label={`Počet meracích senzorov: `}
									value={number?.toString()}
									withDivider={false}
								/>
							</>
						))}
					</div>
				</ContentBox>
			</ThemeProvider>
		</Page>
	)
}
