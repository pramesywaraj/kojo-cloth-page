export function dateFormatParse(date) {
	return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export function addDateFromToday(days) {
	let targetDate = new Date()
	targetDate.setDate(targetDate.getDate() + days)

	return targetDate
}
