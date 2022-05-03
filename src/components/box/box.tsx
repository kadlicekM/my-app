import { Theme } from '@mui/material'
import MuiBox from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

type Props = {
	title: string
	children: React.ReactChild | React.ReactChild[]
	sx?: SxProps<Theme>
	headingSize?: 'small' | 'medium' | 'large'
}

const getHeadingVariant = (size: 'small' | 'medium' | 'large') => {
	switch (size) {
		case 'small':
			return 'h5'
		case 'medium':
			return 'h4'
		default:
			return 'h3'
	}
}

export function ContentBox({
	title,
	children,
	sx,
	headingSize = 'medium',
}: Props) {
	return (
		<MuiBox sx={{ ...sx, padding: '20px 40px' }}>
			<Typography
				variant={getHeadingVariant(headingSize)}
				mb={2}
				sx={{ color: '#ef5350' }}
			>
				{title}
			</Typography>
			{children}
		</MuiBox>
	)
}
