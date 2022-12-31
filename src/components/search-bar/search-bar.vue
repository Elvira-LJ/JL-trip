<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="time">{{startTime}}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="time">{{ endTime }}</div>
      </div>
    </div>
    <div class="content">
      <input type="text" name="" id="" placeholder="关键字/位置/民宿">
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
</div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_day';
import { computed } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';
const mainStore = useMainStore()
const {nowDate, nextDate} = storeToRefs(mainStore)
const startTime = computed(() => formatMonthDay(nowDate.value,'MM.DD'))
const endTime = computed(() => formatMonthDay(nextDate.value,'MM.DD'))
</script>

<style  lang="less" scoped>
.search{
  display: flex;
  // flex-direction: row;
  align-items: center;
  height: 45px;
  background-color: #f2f4f6;
  border-radius: 5px;
  // background-color: pink;

  .select-time{
    padding: 3px 8px;
    border-right: 1px solid #fff;
    .item{
    display: flex;
    font-size: 12px;
    padding: 2px 2px;
    // background-color: pink;
    }
    .name{
      color: #666;
      // padding:1px 2px;
    }
    
    .end{
      position: relative;
    }
    .end::after {
      content: " ";
      width: 0;
      height: 0;
      z-index: 9;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -10px;
    }
  }
  .content{
    display: flex;
    flex: 1;
    height: 100%;
    padding-left: 2px;
    input{
      flex: 1;
      border: none;      
      background-color: #f2f4f6;
      font-size: 12px;
    }

  }
  .right{
    // display: flex;
    align-items: center;
    margin-right: 15px;
        
    .icon-search{
    width: 24px;
    height: 24px;
    display: inline-block;

    background-image: url(../../assets/img/home/home-sprite.png);
    background-position: -29px -151px;
    background-size: 207px 192px;
    }
  }
}
</style>