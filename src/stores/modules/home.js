import { defineStore } from "pinia";
import { getHomeHot } from '@/service'

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHot()
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore