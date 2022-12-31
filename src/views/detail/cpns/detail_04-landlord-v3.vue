<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div  class="landlord-inner">
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

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
   .intro{
    margin-left: 8px;
    flex: 1;
    align-items: center;
    .name{
      margin-top: 20px;
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
}
</style>