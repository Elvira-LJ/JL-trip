import LJRequest from '../request/index'

export function getDetailData(houseId) {
    return LJRequest.get({
        url: '/detail/infos',
        params: {
            houseId: houseId
        }
    })
}