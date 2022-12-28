<template>
  <div class="home">
  <home-nav-bar/>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </div>
  <!-- <home-search-box :get-hot-suggests="hotSuggestsData"/> -->
  <home-search-box/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'

// import {getHomeHot} from '@/service/modules/home.js'
import useHomeStore from '@/stores/modules/home'

//请求子组件的热门数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
// const hotSuggestsData = ref({})
// getHomeHot().then(res=>{
//   // console.log(res)
//   hotSuggestsData.value = res.data
// })
</script>

<style  lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}


</style>
