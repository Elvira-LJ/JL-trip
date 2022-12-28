import LJRequest from '../request'

export function getHomeHot() {
    return LJRequest.get({
        url: '/home/hotSuggests'
    })
}