<template>
  <div class="seach-box">
    <div class="loction">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  <div class="bottom-gray-line">
    <div class="start">
      <div class="data">
        <span class="tip">入住</span>
        <span class="time">8月25日</span>
      </div>
    </div>
    <div class="stay">共一晚</div>
    <div class="end">
      <div class="data">
        <span class="tip">离店</span>
        <span class="time">8月26日</span>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

  const router = useRouter()

  const cityClick = () => {
    router.push('/city')
  }

//获取位置，拿到经纬度，发给服务器，服务器返回具体城市的地址
  const positionClick = ()=> {
    navigator.geolocation.getCurrentPosition(res => {
      console.log('成功',res)
  },err =>{ 
      console.log('失败',err)
  },{
    timeout:3000
  })
  }

</script>

<style  lang="less" scoped>
.loction{
  display: flex;
  height: 44px;
  align-items: center;
  margin: 0 18px;

  .city{
    flex: 1;
    font-size: 15px;
    line-height: 44px;
    color: #333;
  }

  .position{
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

.bottom-gray-line{
  display: flex;
  height: 44px;
  align-items: center;
  
  .start,.stay,.end{
    flex: 1;
    padding: 0 20px;
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
      }
    }
    .stay{
      color: #666;
      font-size: 12px;

    }
}
</style>