<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div  class="landlord-inner">
          <!-- v4房东 -->
          <div class="top">
            <img :src="landlord.landlordModule.topScroll" alt="">
          </div>
          <!-- 头部 -->
          <div class="header">
            <!-- 图标 -->
            <img :src="landlord.landlordModule.hotelLogo" alt="">
            <!-- 头部的中间 -->
            <div class="intro">
              <div class="name">{{ landlord.landlordModule.hotelName }}</div>
              <div class="tag">
              <template v-for="(item,index) in landlord.landlordModule.hotelTags"
               :key="index">
               <div class="item" :style="{ color: item.tagText.color }">
                <span>{{ item.tagText.text }}</span>
                <span v-if="index !== landlord.landlordModule.hotelTags.length - 1" class="divider">|</span>
               </div>
              </template>
            </div>
            </div>
            <div class="contact">联系房东</div>
          </div>
          <!-- 底部 -->
          <div class="bottom">
            <template v-for="(iten,indey) in landlord.landlordModule.hotelSummary" :key="indey">
              <div class="item">
                <div class="title">{{ iten.title }}</div>
                <div class="score">{{ iten.introduction }}</div>
                <div class="dese">{{ iten.tip }}</div>
              </div>
            </template>
          </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';


defineProps({
  landlord:{
    type:Object,
    default:() => ({})
  }
})


</script>

<style  lang="less" scoped>
.landlord-inner{
  .top{
    img{
      width: 100%;
      border-radius: 3px;
    }
  }

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    img{
      width: 54px;
      height: 54px;
    }
   .intro{
    flex: 1;
    align-items: center;
    .name{
      margin-top: 8px;
      font-size: 16px;
      font-weight: 600;
    }
    .tag{
      display: flex;
    margin-top: 5px;
    font-size: 12px;
      .item{
        .divider{
          margin: 0 5px;
        }
      }
    }
    
   }
   .contact{
    height: 24px;
    line-height: 24px;
    border-radius: 5px;
    padding: 0 12px;
    font-size: 12px;
    color: #fff;
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
    }
  }

  .bottom{
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;
    .item{
      font-size: 12px;
      .title{
        color: #999;
      }
      .score{
        margin: 5px 0;
    font-size: 18px;
    font-weight: 700;
    color: #333;
      }
      .dese{
        color: #666;
      }
    }
  }
}
</style>