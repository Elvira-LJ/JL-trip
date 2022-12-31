import dayjs from 'dayjs'

export function formatMonthDay(date, formatStr = 'MM月DD日') {
    //传undefined或者不传 会返回当天的时间
    // console.log(dayjs(undefined).format('MM月DD日'))
    return dayjs(date).format(formatStr)

}

export function getDiffDays(startTime, endTime) {
    return dayjs(endTime).diff(startTime, 'day')
}