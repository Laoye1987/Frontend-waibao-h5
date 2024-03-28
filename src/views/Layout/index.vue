<template>
  <Main />
  <Tabbar />
</template>

<script setup>
import Main from './components/main.vue'
import Tabbar from './components/tabbar.vue'
const api = inject('api')
const init = () => { console.log(api.login) };
onMounted(() => init())

</script>

<style lang="less" scoped></style>
