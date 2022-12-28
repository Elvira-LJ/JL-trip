<template>
  <div class="city">
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置"
      shape='round'
      show-action
      @cancel="cancelClick"
    />

    <van-tabs v-model:active="tabAction" color="var(--primary-color)">
<!-- 方法二：data里面放的是对象 用v-for遍历出来的话(value,key,index) value就是key后面的内容 -->
      <template v-for="(value,key,index) in allCities" :key='key'>
        <!-- 就可以动态拿到title了 -->
        <van-tab :title="value.title">内容 1</van-tab>
      </template>
<!-- 方法一：这些名字都是写死的 如果服务器的名字改了这里也要改，如果有其他数据，还要手动加 做不到动态得 -->
<!-- ?.是因为我们用的是ref()存放数据，一开始还没从服务器拿到 是undefined 这个时候.它会报错 ?.就是有东西的话再拿-->
    <!-- <van-tab :title="allCity?.cityGroup?.title">内容 1</van-tab>
    <van-tab :title="allCity?.cityGroupOverSea?.title">内容 2</van-tab> -->
</van-tabs>

  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useCityStore from '@/stores/modules/city'

// import { getCityAll } from '@/service/modules/city'

//与上面的v-modele双向绑定 一个修改 另一个也会修改
  const searchValue = ref('')
//搜索框功能
  const router = useRouter()
  const cancelClick = ()=> {
    router.back()
  }
//tab的切换
  const tabAction = ref()

  // 缺点：
// 1.如果网络请求太多，那么页面组件中就包含大量的对完了请求和数据的处理逻辑
// 2.如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步一步将子组件传过去（props）
  // const allCity = ref({})  
  // //网络请求：请求城市的数据
  // getCityAll().then(res => {
  //   allCity.value = res.data
  //   console.log('res:',res.data)
  // })

  const cityStore = useCityStore()
  cityStore.fetchAllCity()
  const { allCities } = storeToRefs(cityStore)


 
  
</script>

<style  lang="less" scoped>

</style>