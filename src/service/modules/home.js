import LJRequest from '../request'

export function getHomeHot() {
    return LJRequest.get({
        url: '/home/hotSuggests'
    })
}

export function getHomeCategories() {
    return LJRequest.get({
        url: '/home/categories'
    })
}

export function getHomeContent(currentPage) {
    return LJRequest.get({
        url: '/home/houselist',
        params: {
            page: currentPage
        }
    })
}