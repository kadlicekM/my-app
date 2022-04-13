import Box from '@mui/system/Box'

type Props = {
	children: React.ReactNode
}

export function BottomInfo({ children }: Props) {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				textAlign: 'center',
			}}
		>
			{children}
		</Box>
	)
}
