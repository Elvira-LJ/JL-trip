<template>
  <div class="city">
    <div class="top">
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置"
        shape='round'
        show-action
        @cancel="cancelClick"
      />

      <van-tabs v-model:active="tabActive" color="var(--primary-color)">
  <!-- 方法二：data里面放的是对象 用v-for遍历出来的话(value,key,index) value就是key后面的内容 -->
        <template v-for="(value,key,index) in allCities" :key='key'>
          <!-- 就可以动态拿到title了 -->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
  <!-- 方法一：这些名字都是写死的 如果服务器的名字改了这里也要改，如果有其他数据，还要手动加 做不到动态得 -->
  <!-- ?.是因为我们用的是ref()存放数据，一开始还没从服务器拿到 是undefined 这个时候.它会报错 ?.就是有东西的话再拿-->
      <!-- <van-tab :title="allCity?.cityGroup?.title">内容 1</van-tab>
      <van-tab :title="allCity?.cityGroupOverSea?.title">内容 2</van-tab> -->
      </van-tabs>
    </div>

    <div class="content" >
      <template v-for="(value,key,index) in allCities">
        <!-- <h2 v-show="tabActive === key">{{value.title}}</h2> -->
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
      <!-- <city-group :group-date="currentGroup"/>-->
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useCityStore from '@/stores/modules/city'
// import { getCityAll } from '@/service/modules/city'

import CityGroup from './cpns/city-group.vue'

//与上面的v-modele双向绑定 一个修改 另一个也会修改
  const searchValue = ref('')
//搜索框功能
  const router = useRouter()
  const cancelClick = ()=> {
    router.back()
  }
//tab的切换
  const tabActive = ref()

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

//  const currentGroup = computed(() => allCities.value[tabActive.value])
  
</script>

<style  lang="less" scoped>
.city{

  .top{
    // 组件库里的吸顶效果做了定位 会覆盖没有定位的顶部标题 所以给顶部这个也加上定位
    position: relative;
    z-index: 10;
  }

  .content{
  position: relative;
  z-index: 9;
  height: calc(100vh - 98px);
  overflow-y: auto;
}
}

</style>