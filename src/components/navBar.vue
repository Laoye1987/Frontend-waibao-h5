<template>
  <div class="nav-bar">
    <div class="left" @click="router.go(-1)">
      <van-icon name="arrow-left" />
      <div>{{ leftText }}</div>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  leftText: {
    type: String,
    default: '返回'
  }
})
const router = useRouter()
</script>

<style scoped lang="less">
.nav-bar {
  padding: 0 15px;
  box-sizing: border-box;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    gap: 10px;
  }
}
</style>
