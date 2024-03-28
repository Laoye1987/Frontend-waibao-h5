<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabbarList"
      :key="item.name"
      :name="item.name"
      :icon="item.icon"
      @click="handleNavigate(item.path)">
      {{ item.label }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
const router = useRouter();
console.log(router.currentRoute.value);
const active = ref(router.currentRoute.value.name);
const tabbarList = ref([
  { name: 'home', label: '首页', icon: 'home-o', path: '/' },
  { name: 'market', label: '行情', icon: 'chart-trending-o', path: '/market' },
  { name: 'position', label: '持仓', icon: 'desktop-o', path: '/position' },
  { name: 'news', label: '新闻', icon: 'newspaper-o', path: '/news' },
  { name: 'my', label: '我的', icon: 'contact-o', path: '/user' },
]);

const handleNavigate = (path) => {
  router.push(path);
}
onMounted(() => {
  active.value = router.currentRoute.value.name
})
</script>

<style lang="less" scoped></style>
