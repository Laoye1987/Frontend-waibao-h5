<template>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      v-model="curModel"
      :columns="maketModelList"
      @cancel="showPicker = false"
      @confirm="onConfirm" />
  </van-popup>
</template>

<script setup>
import { onMounted } from 'vue'

const showPicker = ref(false)

const maketModelList = [
  { text: "红跌绿涨", value: "0", key: "greenUp" },
  { text: "红涨绿跌", value: "1", key: "redUp" },
]

const curModel = ref([])

const show = () => {
  showPicker.value = !showPicker.value
}

const onConfirm = () => {
  show()
}

onMounted(() => {
  curModel.value = ['0']
})

defineExpose({ show, curModel })
</script>

<style scoped lang="scss"></style>
