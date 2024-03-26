<template>
  <router-view></router-view>
</template>
<script setup>
import { curTime } from '@/utils/index.js';
onMounted(() => {
  console.warn(`${import.meta.env.MODE !== 'production' ? '当前启动时间' : '当前打包时间'}`, curTime());
})
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}
</style>
