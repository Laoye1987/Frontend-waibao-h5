<template>
  <div class="header">
    <div class="back" v-show="isBack" @click="backUrl">
      <van-icon size="16" name="arrow-left" />
      <span>返回</span>
    </div>
    <div class="lang" v-show="isLang" @click="pickerLangRef.selectLang">
      <van-icon :name="lang" size="20" />
    </div>
  </div>
  <PickerLang ref="pickerLangRef" />
</template>
<script setup>
import { useRouter } from 'vue-router';
import lang from '@/assets/images/lang.png'
import PickerLang from './pickerLang.vue';

const props = defineProps({
  isBack: {
    type: Boolean,
    default: true
  },
  isLang: {
    type: Boolean,
    default: true
  }
})

const pickerLangRef = ref()

const router = useRouter()
const backUrl = () => {
  router.go(-1)
}
</script>


<style lang="less" scoped>
.header {
  font-size: 17px;
  color: #FFFFFF;
  position: relative;

  .lang {
    position: absolute;
    right: 0;
  }

  .back {
    position: absolute;
    left: 0;
    display: flex;
    gap: 11px;
  }
}
</style>