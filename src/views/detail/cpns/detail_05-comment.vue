<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="`查看全部${comment.totalCount}条评论`">
      <div class="comment-inner">
        <!-- 头部 -->
        <div class="header">
          <div class="overall">
            <span>{{comment.overall}}</span>
          <div class="line"></div>
          </div>
          <div class="info">
            <div class="title">超赞</div>
            <div class="count">{{comment.totalCount}}条评论</div>
            <van-rate v-model="comment.overall" readonly allow-half color="#ff9854" :size="10"/>
          </div>
          <div class="subScores">
            <template v-for="(item,index) in comment.subScores" :key="index">
              <div class="item">
                {{ item }}
              </div>
            </template>
          </div>
        </div>
<!-- 老板不错（12） -->
        <div class="tag">
          <template v-for="(iten,indey) in comment.commentTagVo" :key="indey">
              <span class="item" 
              :style="{ color: iten.color, background: iten.backgroundColor }">
              {{ iten.text }}
            </span>
          </template>
        </div>          
<!-- bottom -->
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="comment.comment.userAvatars" alt="">
            </div>
            <div class="profile">
              <div class="name">{{ comment.comment.userName }}</div>
              <div class="date">{{ comment.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
              {{ comment.comment.commentDetail }}
            </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  comment:{
    type:Object,
    define:() => ({})
  }
})
</script>

<style  lang="less" scoped>
.comment-inner{
  padding: 10px 0;
  .header{
    display: flex;
    // justify-content: space-between;
    align-items: center;
    .overall{
      
    position: relative;
      span{
        font-size: 48px;
        color: #333;
        font-weight: 600;
      }
        .line{
        width: 66px;
        height: 6px;
        background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        border-radius: 3px;
        position: absolute;
        bottom: 6px;
        // z-index: 5;
      }
    }
    
    .info{
      // flex: 1;
      margin-left: 19px;
    font-size: 12px;
    color: #333;
    .title{
      font-size: 12px;
    color: #333;
    }
    .count{
      margin: 3px 0;
    color: #999;
    }
    }
    .subScores{
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;
      .item{
        margin-left: 5px;
        margin-top: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .tag{
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;
    .item{
      padding: 3px 5px;
    margin-right: 8px;
    margin-top: 5px;
    border-radius: 8px;
    font-size: 12px;
    }
    
  }

  .content{
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;
    .user{
      display: flex;
        img{
          border-radius: 50%; 
          width: 32px;
           height: 32px;
        }
        .profile{
          margin-left: 8px;
          .name{
            font-size: 14px;
          }
          .date{
            margin-top: 3px;
    font-size: 12px;
    color: #999;
          }
        }
    }
    .text{
      font-size: 12px;
    line-height: 16px;
    color: #333;
    margin-top: 16px;
    }
  }
}
</style>