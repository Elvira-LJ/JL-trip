import { throttle } from 'underscore'
import { ref, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

export default function useScroll(elRef) {
    //默认el就是window 
    let el = window
    const isReachBottom = ref(false)
        // 整个滚动页面的总高度
    const scrollHeight = ref(0)
        // 客户端的高度
    const clientHeight = ref(0)
        // 滚动上去的高度
    const scrollTop = ref(0)
        //防抖和节流 防抖是如果在规定时间内再次触发这个事件，那么就会重新计算这个事件触发的时间，节流的话就是规定时间内不管你出发了几次，都只会在时间到了之后执行一次 安装underscore
    const scrollListenerHandler = throttle(() => {
            //判断是不是window
            if (el === window) {
                scrollHeight.value = document.documentElement.scrollHeight
                clientHeight.value = document.documentElement.clientHeight
                scrollTop.value = document.documentElement.scrollTop
            } else {
                scrollHeight.value = el.scrollHeight
                clientHeight.value = el.clientHeight
                scrollTop.value = el.scrollTop
            }

            if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
                console.log('Gun到底部了')
                    // if (reatchBottomCB) reatchBottomCB()
                isReachBottom.value = true
            }
        }, 100)
        // 组件挂载的时候，监听
    onMounted(() => {
        //传过来的是ref 在onMounted可以确定组件一定是挂载了的 所以一定可以拿到该ref的value，也就是钙元素
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener('scroll', scrollListenerHandler)
    })
    onActivated(() => {
            // console.log('开始')
            el.addEventListener('scroll', scrollListenerHandler)
        })
        //组件卸载的时候，停止监听
    onUnmounted(() => {
        el.removeEventListener('scroll', scrollListenerHandler)
    })
    onDeactivated(() => {
        el.removeEventListener('scroll', scrollListenerHandler)
    })

    return { isReachBottom, scrollHeight, clientHeight, scrollTop }
}