<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
      <template v-for="(item, index) in facilityData.houseFacilitys" :key="index">
        <div class="item" v-if="facilityData.facilitySort.includes(index)">
          <div class="header">
            <img :src="item.icon" alt="">
            <div class="text">{{ item.groupName }}</div>
          </div>
          <div class="list">
            <template v-for="(iten, indey) in item.facilitys.slice(0,4)" :key="indey">
              <div class="iten">
                <i class="icon icon-check" ></i>
                <span>{{ iten.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

const props = defineProps({
  facilityData:{
    type:Object,
    default:() => {}
  }
})
// console.log(props.facilityData.houseFacilitys)
</script>

<style  lang="less" scoped>
.facility-inner{
   padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;
  .item{
    display: flex;
    margin: 25px 0;
    .header{
      width: 90px;
    text-align: center;
      img{
        width: 20px;
        height: 20px;
      }
      .text{
        margin-top: 5px;
        color: #000;
      }
    }
  }
  .list{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .iten{
      // display: flex;
      width: 50%;
      align-items: center;
      margin: 4px 0;
      
      .icon{
        margin: 0 6px;
      }
      .icon-check{
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url(@/assets/img/detail/icon_check.png) 0 0/ 100% 100%;
      }
      span{
        font-size: 12px;
      }
    }
  }
}
</style>