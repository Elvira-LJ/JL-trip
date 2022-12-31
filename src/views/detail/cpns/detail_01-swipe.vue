<template>
  <div class="detail-swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
<!-- 指示器 -->
      <template #indicator="{ active, total}" >
        <div class="indicator">
        <!-- {{ props.active }}-{{ props.total }}/{{ swipeData.length }} -->
        <template  v-for="(value,key,index) in swipeGroup" :key="key">
          <span class="item" :class="{active:swipeData[active]?.enumPictureCategory == key}">
            <span class="text">{{ getName(value[0].title) }}</span>
            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key"> 
              {{ getCategoryIndex(swipeData[active]) }} / {{ value.length }}
            </span>
          </span>
        </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

const props = defineProps({
 swipeData:{
  type:Array,
  default:() => []
 }
})

//将拿到的数据进行分组
const swipeGroup = {}
//item就是数据里一个个的对象，将数据里的enumPictureCategory作为key值，数据中属于这个enumPictureCategory的对象作为该key值的value，而这个value是一个数组，将一个个对象push到数组中去
for(const item of props.swipeData){
  //将item.enumPictureCategory作为swipeGroup的key值，swipeGroup[item.enumPictureCategory]的意思就是拿到这个key 的 value 但是因为一开始对象是空的是没有这个key和value的 所以需要下一步
  let valueArray = swipeGroup[item.enumPictureCategory]
  //如果第一次没有找到对应的key值的value，就创建一个空的数组
  if(!valueArray){
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}
// console.log(swipeGroup)//{2: Array(9), 4: Array(3), 9: Array(13)}

//定义转化数据的方法
const nameReg = /【(.*?)】/i
const getName = (name) => {
  // return name.replace("：", "").replace("】", "").replace("【", "")
  const newName = nameReg.exec(name)
  return newName[1]
}

// 拿到当前组内的轮播索引
const getCategoryIndex = (item) => {
  // console.log(item)
  const valueArray = swipeGroup[item?.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<style  lang="less" scoped>
.my-swipe{
  .item{
    img{
      width: 100%;
    }
  }

  .indicator{
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.8);
    .item{
      .text{
        margin:0 3px;
      }
      &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
    }
  }
}
</style>