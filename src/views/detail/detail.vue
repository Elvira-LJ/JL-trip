<template>
  <div class="detail top-page" ref="detailEl">
    <van-tabs v-model:active='active'  class="tabs" @click-tab="onClickTab" v-if="showTabControl">
      <template v-for="(value,key,index) in sectionEls" :key="index">
      <van-tab  :title=key></van-tab>
      </template>
    </van-tabs>

    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe  :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="描述" :ref="getSectionRef" :get-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :facility-data="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord-v9
        name="房东" 
        :ref="getSectionRef" 
        :landlord="mainPart.dynamicModule"
        v-if="houselist.discoveryContentType===9"
      />
      <detail-landlord-v3
        name="房东" 
        :ref="getSectionRef" 
        :landlord="mainPart.dynamicModule"
        v-else="houselist.discoveryContentType===3"
      />
      
      <detail-commnent name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">精灵旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from "./cpns/detail_02-infos.vue";
import DetailFacility from "./cpns/detail_03-facility.vue";
import DetailLandlordV9 from "./cpns/detail_04-landlord-v9.vue";
import DetailLandlordV3 from "./cpns/detail_04-landlord-v3.vue";
import DetailCommnent from "./cpns/detail_05-comment.vue";
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from './cpns/detail_07-map.vue'
import DetailIntro from "./cpns/detail_08-intro.vue";
import {getDetailData} from '@/service'
import useScroll from "@/hooks/useScroll";

import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)

const route = useRoute()
const router = useRouter()
const houseId = route.params.id
const onClickLeft =() => {
  router.back()
}
const detailDate = ref({})
const mainPart = computed(() => detailDate.value?.mainPart )
getDetailData(houseId).then(res => {
  // console.log(res)
  detailDate.value =  res.data
})


const sectionEls = ref({}) 
const getSectionRef = (value) => {
  if(!value) return 
  //拿到绑定了ref:getSectionRef的子组件的name作为sectionEls对象的key
  const key = value.$el.getAttribute('name')
  //将该key的value值设为该子组件的根元素
  sectionEls.value[key] = value?.$el
  //这样一旦绑定ref为getSectionRef的组件都放在了这个sectionEls这个对象里(key是组件的name，value是组件)
}

//监听滚动 拿到scrollTop
const detailEl = ref()
const { scrollTop }  = useScroll(detailEl)
//如果高度大于300隐藏
const showTabControl = computed(() => {
  return scrollTop.value >= 250
})

let clickTab = false
let currentDistance = -1
const onClickTab = (index) => {

  // console.log(index.name)
  //index.name是当前点击的索引 通过索引拿到当前点击的对象的key值
  const key = Object.keys(sectionEls.value)[index.name]
  //通过key值找到对应的组件 objetc[key] = value
  const el = sectionEls.value[key]
  //拿到该组件距离顶部的距离
  let distance = el.offsetTop
  //如果不是第一个，就要-44 因为第一个还没显示那个导航，
  if(index.name !== 0){
    distance = distance -44
  }

  clickTab = true
  currentDistance = distance

//detailEl.value 拿到详情页组件
  detailEl.value.scrollTo({
    top:distance,
    behavior: "smooth"
  })
}
//vant-tabs里的v-model
const active = ref(0)

//1.监听页面发生滚动
watch(scrollTop,(newValue) => {
  if(currentDistance === newValue){
    clickTab = false
  }

  if(clickTab) return
//获取所有区域的offsetTop Object.values(sectionEls.value)拿到的是对象里的value value就是每一个子组件
const els = Object.values(sectionEls.value)
//将每个子组件距离顶部的高度计算出来放到数组里
const value = els.map(el => el.offsetTop)

  //2.根据newValue去匹配相应的索引值
  let index = value.length - 1
for(let i = 0; i < value.length;i++){
  const top = value[i]
  if(top > newValue + 44){
    index = i -1 
    break
  }
}
//修改当前vant-tabs的索引
active.value = index
})

    
</script>

<style  lang="less" scoped>
.tabs{
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;

}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>