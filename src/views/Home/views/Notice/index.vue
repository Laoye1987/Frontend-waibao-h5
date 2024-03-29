<template>
  <div class="notice">
    <van-nav-bar
      :title="$t('home.notice')"
      left-arrow
      @click-left="onClickLeft" />
    <div class="content">
      <div class="list" v-if="list.length > 0"></div>
      <div class="noData" v-else>
        <van-loading v-if="loading" />
        <van-empty v-else />
      </div>
    </div>
  </div>
</template>
<script setup>
const list = ref([])
const loading = ref(false)
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
.content {
  min-height: calc(100vh - 46px)
}
</style>