import axios from 'axios'
import { BASE_URL, TINEOUT } from './config'
class LJRequest {
    constructor(baseURL, timeout = 2000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        //别人怎么知道你发送请求结束了没？封装一层promise
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                // console.log('res:',res)
                resolve(res.data)
            }, err => {
                // console.log('err:',err)
                reject(err)
            })
        })
    }

    get(config) {
        //将别人传过来的url:...param:...解构出来 aixos的request有这些方法 传入给上面的request去处理
        return this.request({...config, method: 'get' })
    }
    post(config) {
        return this.request({...config, method: 'post' })
    }

}
// //可以创建很多个实例
// const LJRequest1 = new LJRequest('http://123.207.32.32:8000')
// const LJRequest2 = new LJRequest('http://123.207.32.32:8000')

//返回一个实例  用的时候就可以直接.使用里面的方法
export default new LJRequest(BASE_URL, TINEOUT) //把config的两个东西放在这里 然后new出这个实例