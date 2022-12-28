<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"/>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
//useRoute总是拿到当前活跃的路由对象
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<style scoped>
</style>
