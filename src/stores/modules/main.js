import { defineStore } from 'pinia'

//设置时间格式化
//1.设置刚进入页面的住房时间 今天和明天
const nowDate = new Date() //拿到当前时间
    //setDate()设置月份中的日期 拿到当前的时间戳
const nextDate = new Date()
nextDate.setDate(nowDate.getDate() + 1)
    // console.log(nowDate, nextDate)

const useMainStore = defineStore('main', {
    state: () => ({
        nowDate: nowDate,
        nextDate: nextDate,

        isLoading: false
    }),
    actions: {

    }
})

export default useMainStore