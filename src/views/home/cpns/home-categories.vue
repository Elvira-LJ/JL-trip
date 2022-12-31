<template>
  <div class="categories">
    <template v-for="(item,index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const categoriesStore = useHomeStore()
const {categories} =storeToRefs(categoriesStore)
// console.log(categories)
</script>

<style  lang="less" scoped>
.categories{
  display: flex;
  height: 80px;
  padding: 0 20px;
  margin-top: 8px;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  .item{
    flex-shrink: 0;
    display: flex;
    width: 70px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img{
      width: 32px;
      height: 32px;
    }
    .text{
      font-size: 12px;
      margin-top: 8px;
    }
    
  }
}
</style>