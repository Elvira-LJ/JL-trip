<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="getItemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <div class="city">{{ getItemData.location }}</div>
        </div>
        
        <div class="name">{{ getItemData.houseName }}</div>
        <div class="summary">{{ getItemData.summaryText }}</div>
        <div class="price">
          <!-- <van-rate :model-value="itemScore" readonly allow-half :size="13" color="#fff"/> -->
          <div class="new">￥{{ getItemData.finalPrice }}</div>
          <div class="old">￥{{ getItemData.productPrice }}</div>
          <div class="tip">{{ getItemData.priceTipBadge?.text }}</div>
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
    // position: relative;
    padding: 5px;
    .cover{
      width: 100%;
      img{
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }
    }
    
    .info{
      // position: absolute;
      // bottom: 0;
      padding:3px 6px;
      .location{
        display: flex;
        align-items: center;
        img{
          height: 12px;
          width: 12px;
        }
        .city{
        font-size: 12px;
        padding: 5px;
        color: #666;
      }
      }
      
      .name{
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
      }
      .summary{
        font-size: 12px;
        padding: 5px 0;
        color: #666;
        
      }
      .price{
        display: flex;
        padding: 10px 0;  
        .new{
          // margin-left: 8px;
          color: var(--primary-color);
        }
        .old{
          color: #666;
          font-size: 12px;
          margin-top: 2px;
          text-decoration: line-through;
        }
        .tip{
          border-radius: 8px;
          padding:0 6px;
          font-size: 12px;
          margin-left: 5px;
          color: #fff;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
        }
      }
    }
}
}
</style>