<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item,index) in houselist" :key="item.data.houseId">
      <house-item-v-9 
        v-if="item.discoveryContentType === 9" 
        :get-item-data="item.data"
        @click="detailBtn(item.data.houseId)"
        />
      <house-item-v-3 
        v-else-if="item.discoveryContentType === 3" 
        :get-item-data="item.data"
        @click="detailBtn(item.data.houseId)"
        />
      <!-- <h2 v-if="item.discoveryContentType === 9">item9:{{item.data.houseName}}</h2>
      <h2 v-else-if="item.discoveryContentType === 3">item:3{{item.data.houseName}}</h2> -->
    </template>
    </div>
    
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)
// console.log(houselist)

const route = useRouter()
//点击跳转到详情页
const detailBtn = (houseId) =>{
  route.push('/detail/' + houseId)
}

</script>

<style  lang="less" scoped>
.content{
  padding: 10px 8px;
  
  .title{
    font-size: 22px;
    padding: 10px
  }
  .list{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>