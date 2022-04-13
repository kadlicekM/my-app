import { Theme } from '@mui/material'
import MuiBox from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

type Props = {
	title: string
	children: React.ReactChild
	sx?: SxProps<Theme>
}

// let pole = []

// const pole1 = [1, 2, 3, 4, 5]
// const pole2 = ['pato', 'rytmus']

// pole = [...pole2, ...pole1]

// console.log({ pole })

export function ContentBox({ title, children, sx }: Props) {
	return (
		<MuiBox sx={{ ...sx, padding: '20px 40px' }}>
			<Typography variant="h3" mb={2} sx={{ color: '#ef5350' }}>
				{title}
			</Typography>
			{children}
		</MuiBox>
	)
}
