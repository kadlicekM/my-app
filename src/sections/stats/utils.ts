import { differenceInDays, addWeeks, isAfter, isBefore } from 'date-fns'

export function calculateDateFrom(
	fromValue: Date,
	toValue: Date,
	periodicity: 'hour' | 'day' | 'week' | 'month' | 'year',
) {
	let dateFrom = fromValue

	if (periodicity === 'hour') {
		if (differenceInDays(toValue, fromValue) > 7) {
			dateFrom = addWeeks(toValue, -1)
		}
	}

	if (isBefore(toValue, fromValue)) {
		dateFrom = toValue
	}

	return dateFrom
}

export function calculateDateTo(
	fromValue: Date,
	toValue: Date,
	periodicity: 'hour' | 'day' | 'week' | 'month' | 'year',
) {
	let dateTo = toValue

	if (periodicity === 'hour') {
		if (differenceInDays(toValue, fromValue) > 7) {
			dateTo = addWeeks(fromValue, 1)
		}
	}

	if (isAfter(fromValue, toValue)) {
		dateTo = fromValue
	}

	return dateTo
}
