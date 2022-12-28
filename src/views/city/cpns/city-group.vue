<template>
  <div class="city-group">
    <!-- vant组件库实现 -->
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city,index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
<!-- 展示热门下面的ABCD的数据 -->
        <template v-for="(item,index) in groupData?.cities" :key="index">
          <van-index-anchor :index="item.group" />
          <template v-for="(iten,indey) in item.cities" :key="indey">
            <van-cell :title="iten.cityName" @click="cityClick(iten)"/>
          </template>
        </template>
      </van-index-bar>

        <!--第一次里面是还没有值的 网络请求还没下来currentGroup?. 有值再展示  -->
        <!--自己实现： <template v-for="item in currentGroup?.cities" >
          <h2>{{ item.group }}</h2>
          <template v-for="iten in item.cities">
            <div class="city">{{ iten.cityName }}</div>
          </template>
        </template> -->
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { computed } from "@vue/runtime-core"
import { useRouter } from "vue-router";

// 定义props
const props = defineProps({
  groupData:{
    type:Object,
    //默认是一个空对象
    default:() => ({})
  }
})

// 动态索引
const indexList = computed(() => {
  // 在数组前面加上# 也就是页面的索引
  const list = props.groupData.cities.map(item => item.group) 
  list.unshift('#')
  return list
})

// 点击城市按钮 跳转会首页 回显城市名称
const router =  useRouter()
function cityClick(city){
  //修改store里面的currentCity
  // console.log(city)
  const cityStore = useCityStore()
  cityStore.currentCity = city
  // console.log(cityStore.currentCity)
  // 返回上一级
  router.back()
}
</script>

<style  lang="less" scoped>
.city-group{
  

  .list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city{
    width: 70px;
    height: 28px;
    font-size: 12px;
    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    color: #000;
    background-color: #fff4ec;
    margin: 6px;
  }
}
}

</style>