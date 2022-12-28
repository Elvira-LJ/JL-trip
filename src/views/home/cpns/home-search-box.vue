<template>
  <div class="search-box">
<!-- 定位 -->
    <div class="section loction">
      <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
<!-- 选择入住时间 -->
  <div class="section data-range" @click="showCalendar = true">
    <div class="start">
      <div class="data">
        <span class="tip">入住</span>
        <span class="time">{{startTime}}</span>
      </div>
    </div>
    <div class="stay">共{{stayCount}}晚</div>
    <div class="end">
      <div class="data">
        <span class="tip">离店</span>
        <span class="time">{{endTime}}</span>
      </div>
      
    </div>
  </div>
 <!-- 弹出的日历 -->
  <van-calendar 
    v-model:show="showCalendar" 
    @confirm="onConfirm" 
    type="range"
    :round=false
    color="#ff9854"
    :show-confirm="false"
    />
<!-- 价格不限/人数不限/关键字 -->
    <div class="section price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
  <div class="section keyword">关键字/位置/民宿名</div>
<!-- 热门推荐 -->
  <div class="section hot-suggests">
    <template v-for="(item,index) in hotSuggests" :key="item">
      <div 
      class="item"
      :style="{color:item.tagText.color,background:item.tagText.background.color}"
      >{{ item.tagText.text }}</div>
    </template>
  </div>
  <div class="section search-btn">
    <div class="btn">开始搜索</div>
  </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city'
import useHomeStore from '@/stores/modules/home'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import {formatMonthDay,getDiffDays} from '@/utils/format_day'

//从父组件拿数据
// defineProps({
//   getHotSuggests:{
//     type:Object,
//     default:()=> ({}) 
//   }
// })
// 点击城市跳转到city页面
  const router = useRouter()
  const cityClick = () => {
    router.push('/city')
  }

//获取位置，拿到经纬度，发给服务器，服务器返回具体城市的地址
  // const positionClick = ()=> {
  //   navigator.geolocation.getCurrentPosition(res => {
  //     console.log('成功',res)
  // },err =>{ 
  //     console.log('失败',err)
  // },{
  //   timeout:3000
  // })
  // }

// 获取当前城市回显示
const cityStore = useCityStore()
//从store里拿在city组件里选择的位置进行回显
const {currentCity} = storeToRefs(cityStore)

//设置时间格式化
//1.设置刚进入页面的住房时间 今天和明天
const nowDate  = new Date() //拿到当前时间
//setDate()设置月份中的日期 拿到当前的时间戳
const nextDate = new Date()
nextDate.setDate(nowDate.getDate() + 1)

//2.将时间格式化
const startTime = ref(formatMonthDay(nowDate))
// console.log(nextDate)
const endTime = ref(formatMonthDay(nextDate))

//3.计算停留的时间
const stayCount = ref(getDiffDays(nowDate,nextDate))

// 日历相关的时间格式
const showCalendar = ref(false)
const onConfirm = (value) => {
  // console.log(value)
  //拿到选择的两个日期的时间
  const selectStartTime = value[0]
  const selectEndTime = value[1]
  //将新选择的时间进行格式化然后修改页面的显示日期
  startTime.value = formatMonthDay(selectStartTime)
  endTime.value = formatMonthDay(selectEndTime)
  showCalendar.value = false
  //设置修改后的日期的停留天数
  stayCount.value = getDiffDays(selectStartTime,selectEndTime)
}

//热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)


</script>

<style  lang="less" scoped>
.search-box{
  --van-calendar-popup-height:100%;
  background-color: #f7f8fb;
}
.section{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  // height: 44px;

  // margin: 0 18px;

  .start{
    flex: 1;
    align-items: center;
  }
  .end{
    min-width: 30%;
  }
}
.loction{
  height: 44px;
  .city{
  

    flex: 1;
    font-size: 15px;
    line-height: 44px;
    color: #333;
  }

  .position{
  // height: 44px;
    .text{
      position: relative;
      font-size: 12px;
      top: 2px;
      color: #666;
    }

    img{
      height: 18px;
      width: 18px;
      margin-left: 5px;
    }
  }
}

.data-range{
  height: 44px;
  .start,.stay,.end{
    flex: 1;
  }
    .data{
      display: flex;
      flex-direction: column;

      .tip{
          color: #999;
          font-size: 12px;
        }
      .time{
        font-size: 15px;
        color: #333;
        margin-top: 3px;
        font-weight: 500;
      }
    }
    .stay{
      color: #666;
      font-size: 12px;
      text-align: center;

    }
}

.price-counter{
  height: 44px;
}
.keyword{
  height: 44px;
}
.hot-suggests{
  margin: 10px 0;
  .item{
    font-size: 12px;
    margin: 3px;
    padding: 4px 8px;
    border-radius: 14px;
  }

}
.search-btn{
  .btn{
    width: 342px;
    height: 38px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 20px;
    background-color: var(--primary-color);
    color: #fff;
    line-height: 38px;
    text-align: center;
  }
}

</style>