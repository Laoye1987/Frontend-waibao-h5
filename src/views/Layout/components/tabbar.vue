<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="chart-trending-o">行情</van-tabbar-item>
    <van-tabbar-item name="friends" icon="desktop-o">持仓</van-tabbar-item>
    <van-tabbar-item name="setting" icon="newspaper-o">新闻</van-tabbar-item>
    <van-tabbar-item name="setting1" icon="contact-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
const active = ref('home');
</script>

<style lang="less" scoped></style>
