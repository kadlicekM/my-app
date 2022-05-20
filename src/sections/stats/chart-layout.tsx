import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { addDays } from 'date-fns'

import { Chart } from 'components/chart/chart'
import { FormProvider, useForm } from 'react-hook-form'
import { FormSelectField } from 'components/form/form-select-field'
import { FormDatepicker } from 'components/form/form-datepicker'
import { periodicityOptions } from './api'
import { calculateDateFrom, calculateDateTo } from './utils'
import { useStats } from 'routes/stats/stats-hook'

type FormValues = {
	from: Date
	to: Date
	periodicity: 'hour' | 'day' | 'week' | 'month' | 'year'
	area?: number
	sector?: number
	sensor?: number
	type?: number
}

export function ChartLayout() {
	const form = useForm<FormValues>({
		defaultValues: {
			from: addDays(new Date(), -1),
			to: new Date(),
			periodicity: 'hour',
		},
	})

	const values = form.watch()

	const { areas, sensors, sectors, types, getSectors, getSensors, getTypes } =
		useStats()

	const onSubmit = (data: any) => console.log(data)
	console.log(sectors)
	// form.setValue('sector'un,)
	console.log(values.area)

	return (
		<FormProvider {...form}>
			<Grid container mt={5}>
				<Grid item xs={12}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
							}}
						>
							<FormSelectField
								sx={{ mr: 4 }}
								name="area"
								label="Area"
								options={areas}
								onChange={selectedValue => {
									getSectors(Number(selectedValue))
									form.setValue('sector', undefined)
								}}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="sector"
								label="Sector"
								options={sectors}
								disabled={!values.area}
								onChange={selectedValue => {
									getSensors(Number(selectedValue))
									form.setValue('sensor', undefined)
									form.setValue('type', undefined)
								}}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="sensor"
								label="Sensor"
								options={sensors}
								disabled={!values.sector}
								onChange={selectedValue => {
									getTypes(Number(selectedValue))
									form.setValue('type', undefined)
								}}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="type"
								label="Typ"
								options={types}
								disabled={!values.sensor}
								onChange={selectedValue => {
									// Todo get data
								}}
							/>
							<FormSelectField
								name="periodicity"
								label="Perioda"
								options={periodicityOptions}
							/>
						</Box>

						<Box display="flex">
							<FormDatepicker
								name="from"
								label="Datum od:"
								sx={{ mr: 4 }}
								maxDate={new Date()}
								onChange={date => {
									if (!date) {
										return
									}

									const dateTo = calculateDateTo(
										// this is value we pick from date picker (ACTUAL VALUE THAT USER IS PICKING)
										// values.to is value in form.. (old one, we are changing now by picking NEW ACTUAL date)
										date,
										values.to,
										values.periodicity,
									)

									form.setValue('to', dateTo)
								}}
							/>
							<FormDatepicker
								name="to"
								label="Datum do:"
								maxDate={new Date()}
								onChange={date => {
									if (!date) {
										return
									}

									const dateFrom = calculateDateFrom(
										values.from,
										// this is value we pick from date picker (ACTUAL VALUE THAT USER IS PICKING)
										// values.to is value in form.. (old one, we are changing now by picking NEW ACTUAL date)
										date,
										values.periodicity,
									)

									form.setValue('from', dateFrom)
								}}
							/>
						</Box>
					</form>
				</Grid>
				<Grid item xs={12}>
					<Chart />
				</Grid>
			</Grid>
		</FormProvider>
	)
}
