<template>
    <div class="tab-bar">
      <van-tabbar v-model="currentIndex" active-color="
      #ff9854">
        <template v-for="(item, index) in tabbarData" :key="item.acm">
          <van-tabbar-item :to="item.path">
            <span>{{ item.text }}</span>
            <!-- 如果没有用插槽 图标是自定义的 如何修改大小 -->
            <template #icon="props">
              <img v-if="currentIndex !== index" :src = "getAssetURL(item.image)" alt="">
                <img v-else :src = "getAssetURL(item.imageActive)" alt="">
            </template>
          </van-tabbar-item>
        </template>
      </van-tabbar>

    </div>
</template>

<script setup>
import {watch} from 'vue'
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'
import {ref} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const currentIndex = ref(0)
watch(route,(newValue) => {
  // console.log(newValue.path)
  const index = tabbarData.findIndex(item => item.path === newValue.path)
  if(index === -1) return
  currentIndex.value = index
})
</script>

<style  lang="less" scoped>
.tab-bar{

  //自己用插槽插入的图片 直接在这里修改大小
  img{
    height: 26px;
  }
  
  
}
</style>