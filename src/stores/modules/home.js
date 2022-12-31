import { defineStore } from "pinia";
import { getHomeHot, getHomeCategories, getHomeContent } from '@/service'

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houselist: [],
        currentPage: 1
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHot()
            this.hotSuggests = res.data
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories()
            this.categories = res.data

        },
        async fetchContent() {
            const res = await getHomeContent(this.currentPage)
            this.houselist.push(...res.data)
            this.currentPage++
        }
    }
})

export default useHomeStore