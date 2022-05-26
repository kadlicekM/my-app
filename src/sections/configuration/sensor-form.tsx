import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { v4 } from 'uuid'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'

import { FormTextField } from 'components/form/form-text-field'
import { FormSelectField } from 'components/form/form-select-field'
import { SensorType } from 'models'
import { IconButton } from '@mui/material'

const defaultSensorTypeValue = { id: v4() }

type Props = {
	createFunction: (name: string) => Promise<void>
}

type SensorFormValues = {
	sensor: string
}

export function SensorForm({ createFunction }: Props) {
	const form = useForm({
		defaultValues: {
			sensorTypes: [],
		},
	})

	const [sensorTypes, setSensorTypes] = useState<Array<SensorType>>([
		defaultSensorTypeValue,
	])

	const handleAddSensorType = () => {
		setSensorTypes(prevSensorTypes => [...prevSensorTypes, { id: v4() }])
	}

	// passing an id to this functions
	const handleRemoveSensorType = (id: string) => {
		setSensorTypes(prevSensorTypes => {
			// we create new sensor types array without id passed to this function
			const newSensorTypes = prevSensorTypes.filter(type => type.id !== id)

			return newSensorTypes
		})
	}

	const onSubmit = async (data: any) => {
		await createFunction(data.sensor)
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Typography
					variant="h4"
					mb={2}
					sx={{ color: theme => theme.palette.primary.main }}
				>
					Pridanie senzora
				</Typography>

				<Box display="flex" flexDirection="column">
					<Grid container p={2}>
						<Grid item xs={12}>
							<FormTextField label="Názov senzora" name="name" />
						</Grid>

						{sensorTypes.map(({ id }, i) => (
							<SensorTypeItem
								key={id}
								id={id}
								index={i}
								deleteItem={handleRemoveSensorType}
								parentName="sensorTypes"
							/>
						))}
					</Grid>

					<Box display="flex" justifyContent="center">
						<Button
							onClick={handleAddSensorType}
							startIcon={<AddCircleOutlineIcon />}
						>
							Ďalší typ senzora
						</Button>
					</Box>
				</Box>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{ mt: 2, ml: 2, width: 250, p: 1 }}
				>
					Pridať
				</Button>
			</form>
		</FormProvider>
	)
}

type SensorTypeProps = {
	id: string
	index: number
	deleteItem: (id: string) => void
	parentName?: string
}

function SensorTypeItem({
	index,
	id,
	deleteItem,
	parentName = '',
}: SensorTypeProps) {
	const handleDelete = () => {
		deleteItem(id)
	}

	return (
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				width={'100%'}
				alignItems="center"
				mt={3}
			>
				<Typography color="primary" fontWeight="bold">
					Sensor type {index + 1}
				</Typography>

				{index !== 0 && (
					<IconButton onClick={handleDelete}>
						<IndeterminateCheckBoxIcon />
					</IconButton>
				)}
			</Box>

			<Grid container>
				<Grid item xs={6} pr={1}>
					<FormTextField
						label="Typ veličiny"
						name={`${parentName}[${index}].type`}
					/>
					<FormTextField
						label="Minimálna hodnota"
						name={`${parentName}[${index}].minValue`}
					/>
					<FormSelectField
						label="Area"
						name={`${parentName}[${index}].area`}
						options={[]}
					/>
				</Grid>

				<Grid item xs={6} pl={1}>
					<FormTextField
						label="Jednotka"
						name={`${parentName}[${index}].unit`}
					/>
					<FormTextField
						label="Maximálna hodnota"
						name={`${parentName}[${index}].maxValue`}
					/>
					<FormSelectField
						label="Sektor"
						name={`${parentName}[${index}].sector`}
						options={[]}
					/>
				</Grid>
			</Grid>
		</>
	)
}
