<template>
  <div class="infos">
    <h2 class="name">
      {{ getInfos.houseName }}
    </h2>
    <div class="tag" >
      <template v-for="(item,index) in getInfos.houseTags" :key="index">
        <span class="item" 
        v-if="item.tagText"
        :style="{color:item.tagText.color, background:item.tagText.background.color}"
        >{{ item.tagText.text }}</span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="overall">{{ getInfos.commentBrief.overall }}</span>
        <span class="title">{{ getInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ getInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ getInfos.commentBrief.totalCount }}</span>条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="location">
      <div class="left">{{ getInfos.nearByPosition.address }}</div>
      <div class="right">地图·周边<van-icon name="arrow" /></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  getInfos:{
    type:Object,
    default:()=>{}
  }
})
</script>

<style  lang="less" scoped>
.infos{
  padding:15px;

  .tag{
    padding: 15px 0;
    .item{
      padding: 1px;
      margin-right: 3px;
    }
  }

  .comment{
    background-color: #f5f7fa;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 5px;
    .left{
      flex: 1;
      // background-color: pink;
      .overall{
        
        font-size: 18px;
        font-weight: 700;
      }
      .title{
        color: #333;
        margin: 0 5px;
        font-weight: 700;
        font-size: 12px;
      }
      .brief{
        color: #666;
      }
    }
    .right{
      color: #ff9645;
    }
  }

  .location{
    background-color: #f5f7fa;
    display: flex;
    margin: 10px 0;
    padding: 8px;
    border-radius: 5px;
    .left{
      flex: 1;
      padding-right: 5px;
      font-size: 14px;
    font-weight: 700;
    color: #333;
    }
    .right{
      color: #ff9645;
    }
  }
}
</style>