import { defineStore } from 'pinia'
import { getCityAll } from '@/service/modules/city'

const useCityStore = defineStore('city', {
    state: () => ({
        allCities: {},
    }),
    actions: {
        async fetchAllCity() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})
export default useCityStore