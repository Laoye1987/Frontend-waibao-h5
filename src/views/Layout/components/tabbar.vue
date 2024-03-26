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
const { t } = useI18n();

const active = ref('home');

const router = useRouter();

const tabbarList = ref([
  { name: 'home', label: '首页', icon: 'home-o', path: '/' },
  { name: 'search', label: '行情', icon: 'chart-trending-o', path: '/market' },
  { name: 'friends', label: '持仓', icon: 'desktop-o', path: '' },
  { name: 'setting', label: '新闻', icon: 'newspaper-o', path: '' },
  { name: 'setting1', label: '我的', icon: 'contact-o', path: '/user' },
]);

const handleNavigate = (path) => {
  router.push(path);
}
</script>

<style lang="less" scoped></style>
