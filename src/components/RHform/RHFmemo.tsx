// import React, { memo } from 'react'
// import { TextField } from '@mui/material'
// import { UseFormReturn } from 'react-hook-form'

// interface IReactHookFormTextFieldProps {
// 	methods: UseFormReturn
// 	label: string
// 	name: string
// }
// interface EqualProps {
//     prevProps: string
//     nextProps: string
//     methods: UseFormReturn
// }

//  function ReactHookFormTextFieldMemo({ methods, label, name }: IReactHookFormTextFieldProps) {<TextField
//     label={label}
//     variant="outlined"
//     error={!!methods.formState.errors[name]}
//     helperText={methods.formState.errors[name]?.message ?? ''}
//     fullWidth
//     margin="dense"
//     {...methods.register(name)}
// />

// function areEqual({prevProps,nextProps}:EqualProps) {
// return (
//     prevProps.methods.formState.isDirty ===
//         nextProps.methods.formState.isDirty &&
//     prevProps.methods.formState.errors !== nextProps.methods.formState.errors
// )
// },}

// export default ReactHookFormTextFieldMemo;

import React, { memo } from 'react'
import { TextField } from '@mui/material'
import { Controller, UseFormReturn } from 'react-hook-form'

interface IReactHookFormTextFieldProps {
	methods: UseFormReturn
	label: string
	name: string
}

const ReactHookFormTextFieldMemo = memo(
	({ methods, label, name }: IReactHookFormTextFieldProps) => (
		<Controller
			name={name}
			control={methods.control}
			render={({ field }) => (
				<TextField
					{...field}
					label={label}
					variant="outlined"
					error={!!methods.formState.errors[name]}
					helperText={methods.formState.errors[name]?.message ?? ''}
				/>
			)}
		/>
	),
	(prevProps, nextProps) => {
		return (
			prevProps.methods.formState.isDirty ===
				nextProps.methods.formState.isDirty &&
			prevProps.methods.formState.errors !== nextProps.methods.formState.errors
		)
	},
)

export default ReactHookFormTextFieldMemo
