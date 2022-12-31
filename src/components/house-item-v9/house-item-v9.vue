<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="getItemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ getItemData.summaryText }}</div>
        <div class="name">{{ getItemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemScore" readonly allow-half :size="13" color="#fff"/>
          <div class="new">￥{{ getItemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"

const props = defineProps({
  getItemData:{
    type:Object,
    default:()=>{{}}
  }
})
const itemScore = computed(() => {
  return Number(props.getItemData.commentScore)
})
</script>

<style  lang="less" scoped>
.house-item{
  width: 50%;
  .item-inner{
    position: relative;
    padding: 5px;
    color: #fff;
    img{
      width: 100%;
      border-radius: 5px;
    }
    .info{
      position: absolute;
      bottom: 0;
      padding: 6px;
      .summary{
        font-size: 12px;
        padding: 5px 0;
        
      }
      .name{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
      }
      .price{
        display: flex;
        padding: 10px 0;
        .new{
          margin-left: 8px;
        }
      }
    }
}
}

</style>