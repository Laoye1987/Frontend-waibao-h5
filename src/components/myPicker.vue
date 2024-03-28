<template>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      v-model="curModel"
      :columns="options"
      @cancel="showPicker = false"
      @confirm="onConfirm" />
  </van-popup>
</template>

<script setup>
const props = defineProps(['options'])
const emit = defineEmits(['confirm'])

const showPicker = ref(false)

const curModel = ref([])

const show = () => {
  showPicker.value = !showPicker.value
}

const onConfirm = () => {
  show()
  emit('confirm', curModel.value[0], props.options.find(item => item.value === curModel.value[0]).text)
}

onMounted(() => {
  curModel.value = [props.options[0].value]
  emit('confirm', curModel.value[0], props.options.find(item => item.value === curModel.value[0]).text)
})

defineExpose({ show })
</script>

<style scoped lang="scss"></style>
