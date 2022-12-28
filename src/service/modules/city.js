import LJRequest from '../request/index'

export function getCityAll() {
    return LJRequest.get({
        url: '/city/all'
    })
}