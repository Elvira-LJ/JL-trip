<template>
  <div class="loading" 
  @click="loadingBtn"
  v-if="mainStore.isLoading"
  >
    <div class="bg">
    <img src="@/assets/img/home/full-screen-loading.gif" alt="">

    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore()
const loadingBtn = () => {
  mainStore.isLoading = false
}
</script>

<style  lang="less" scoped>
.loading{
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);

  .bg{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    background: url('@/assets/img/home/loading-bg.png') 0 0 /100% 100%;

    img{
    height: 70px;
    width: 70px;
    margin-bottom: 8px;
  }
  }
  
}
</style>