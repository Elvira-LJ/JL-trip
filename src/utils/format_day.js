import dayjs from 'dayjs'

export function formatMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

export function getDiffDays(startTime, endTime) {
    return dayjs(endTime).diff(startTime, 'day')
}