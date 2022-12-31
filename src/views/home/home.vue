<template>
  <div class="home">
  <home-nav-bar/>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </div>
  <!-- <home-search-box :get-hot-suggests="hotSuggestsData"/> -->
  <home-search-box/>
  <home-categories/>
  
  <div class="search-bar" v-if="isShowSearchBar">
    <search-bar />
  </div>
  
  <home-content/>

  <!-- <button @click="loadMoreBtn">加载更多</button> -->
  </div>
</template>

<script setup>
import { computed, ref,watch } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue'
import searchBar from '@/components/search-bar/search-bar.vue'
// import {getHomeHot} from '@/service/modules/home.js'
import useHomeStore from '@/stores/modules/home'
import useScroll from '@/hooks/useScroll'


//请求子组件的热门数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchContent()

//点击加载更多
// const loadMoreBtn = () => {
//   console.log('more')
//   homeStore.fetchContent()
// }
// 如果这样直接传入一个回调函数进行监听的话 那么hooks里面就要接受一个reachBottomCB回调
// useScroll(() => {
//   homeStore.fetchContent()
// })

const { isReachBottom,scrollTop } = useScroll()

// 监听isReachBottom是否发生改变，如果发生改变可以拿到变化后的新值
watch(isReachBottom,(newValue) => {
  if(newValue){
    // homeStore.fetchContent()
    // isReachBottom.value = false
    // fetchContent()是个异步函数 会返回一个promise
    homeStore.fetchContent().then(() => {
      isReachBottom.value = false
    })
  }
})
// 搜索框显示的控制 滚动进去100px的时候显示
// 方法一：自己监听
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newValue) => {
//   isShowSearchBar.value = newValue > 100
// })
// 方法二：用计算属性，计算属性会帮我们监听数据发生改变的话，会自动帮我们更新，并且计算属性是有缓存的
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350
})


</script>

<style  lang="less" scoped>
.home{
  padding-bottom:60px
}
.banner{
  img{
    width: 100%;
  }
}
.search-bar{
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  // display: flex;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>
