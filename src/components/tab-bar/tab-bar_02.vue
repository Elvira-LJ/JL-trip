<template>
    <div class="tab-bar">
      <van-tabbar v-model="currentIndex" active-color="
      #ff9854">
        <template v-for="(item, index) in tabbarData" :key="item.acm">
          <van-tabbar-item :to="item.path" icon="home-o">
            <span>{{ item.text }}</span>
            <!-- 如果没有用插槽 图标是自定义的 如何修改大小 -->
            <!-- <template #icon="props">
              <img v-if="currentIndex !== index" :src = "getAssetURL(item.image)" alt="">
                <img v-else :src = "getAssetURL(item.imageActive)" alt="">
            </template> -->
          </van-tabbar-item>
        </template>
      </van-tabbar>

    </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'
import {ref} from 'vue'

const currentIndex = ref(0)
</script>

<style  lang="less" scoped>
.tab-bar{
  //局部修改：局部定义变量 也可以直接放到这里 只针对tab-ber进行修改
  // --van-tabbar-item-icon-size: 50px;

  // 找到类，对类中的属性重写，因为类是在别的组件中的 而我们的style是有scrped有自己的作用域的 所以需要:deep()找到那个组件进行修改
  :deep(.van-tabbar-item__icon){
    font-size: 30px;
  }

  //自己用插槽插入的图片 直接在这里修改大小
  img{
    height: 26px;
  }
  
  
}
</style>