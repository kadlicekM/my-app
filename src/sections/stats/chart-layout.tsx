import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { addDays } from 'date-fns'

import { Chart } from 'components/chart/chart'
import { FormProvider, useForm } from 'react-hook-form'
import { FormSelectField } from 'components/form/form-select-field'
import { FormDatepicker } from 'components/form/form-datepicker'
import { periodicityOptions } from './api'
import { calculateDateFrom, calculateDateTo } from './utils'

type FormValues = {
	from: Date
	to: Date
	periodicity: 'hour' | 'day' | 'week' | 'month' | 'year'
	area: string
	sector: string
	sensor: string
	type: string
}

export function ChartLayout() {
	const form = useForm<FormValues>({
		defaultValues: {
			from: addDays(new Date(), -1),
			to: new Date(),
			periodicity: 'hour',
			area: '',
			sector: '',
			sensor: '',
			type: '',
		},
	})

	const onSubmit = (data: any) => console.log(data)

	const values = form.watch()

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
								options={[]}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="sector"
								label="Sector"
								options={[]}
								disabled={!values.area}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="sensor"
								label="Sensor"
								options={[]}
								disabled={!values.sector}
							/>
							<FormSelectField
								sx={{ mr: 4 }}
								name="type"
								label="Typ"
								options={[]}
								disabled={!values.sensor}
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
