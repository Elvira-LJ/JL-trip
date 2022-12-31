<template>
  <div class="app">
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive"></component>
    </router-view>
    <tab-bar v-if="!route.meta.hideTabBar"/>
    <loading/>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import loading from './components/loading/loading.vue';
//useRoute总是拿到当前活跃的路由对象
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<style lang='less' scoped>

</style>
