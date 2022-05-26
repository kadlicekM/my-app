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
import { Button } from '@mui/material'
import { apiAuthFetch } from 'utils/fetch'
import { Result } from 'models'

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

	const {
		areas,
		sensors,
		sectors,
		types,
		chartData,
		getSectors,
		getSensors,
		getTypes,
		setChartData,
	} = useStats()

	const onSubmit = (data: any) => fetchChartValues()
	console.log(chartData)
	const fetchChartValues = async () => {
		console.log(values.type)
		const res = await apiAuthFetch<Result<any>>(
			'http://localhost:5000/api/data/chart',
			{
				method: 'POST',
				body: JSON.stringify({
					sensor_type_ids: [Number(values.type)],
					interval: values.periodicity,
					from: values.from,
					to: values.to,
				}),
			},
		)
		console.log(res)
		if (res?.ok) {
			setChartData(res.data)
		}
	}

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
									form.setValue('sensor', undefined)
									form.setValue('type', undefined)
								}}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="sector"
								label="Sektor"
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
								label="Senzor"
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
							<Button
								type="submit"
								color="primary"
								variant="contained"
								sx={{
									width: '200px',
									height: '40px',
									marginTop: '10px',
									marginLeft: '30px',
								}}
							>
								Potvrdiť
							</Button>
						</Box>
					</form>
				</Grid>
				<Grid item xs={12}>
					<Chart data={chartData[0]} />
				</Grid>
			</Grid>
		</FormProvider>
	)
}
