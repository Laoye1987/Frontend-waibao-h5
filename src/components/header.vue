<template>
  <div class="header">
    <div class="back" v-show="isBack" @click="backUrl">
      <van-icon size="16" name="arrow-left" />
      <span>返回</span>
    </div>
    <div class="lang" v-show="isLang" @click="selectLang">
      <van-icon :name="lang" size="20" />
    </div>
  </div>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      v-model="curLangType"
      :columns="langList"
      @cancel="showPicker = false"
      @confirm="onConfirm" />
  </van-popup>
</template>
<script setup>
import { useRouter } from 'vue-router';
import lang from '@/assets/images/lang.png'
import { useI18n } from 'vue-i18n';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import zhHK from 'vant/es/locale/lang/zh-HK';
import jaJP from 'vant/es/locale/lang/ja-JP';
import deDE from 'vant/es/locale/lang/de-DE';
import frFR from 'vant/es/locale/lang/fr-FR';
import arSA from 'vant/es/locale/lang/ar-SA';
import koKR from 'vant/es/locale/lang/ko-KR';
import thTH from 'vant/es/locale/lang/th-TH';
import ruRU from 'vant/es/locale/lang/ru-RU';

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
const i18n = useI18n()

const langType = {
  en: enUS,
  zh: zhHK,
  ja: jaJP,
  de: deDE,
  fr: frFR,
  ar: arSA,
  ko: koKR,
  th: thTH,
  ru: ruRU,
}
const curLangType = ref([])
const showPicker = ref(false)
const langList = [
  { text: "English", value: "en", key: "en" },
  { text: "繁体中文", value: "zh", key: "zh" },
  { text: "日本語", value: "ja", key: "ja" },
  { text: "Deutsch", value: "de", key: "de" },
  { text: "Français", value: "fr", key: "fr" },
  { text: "عربي", value: "ar", key: "ar" },
  { text: "한국인", value: "ko", key: "ko" },
  { text: "ไทย", value: "th", key: "th" },
  { text: "Русский", value: "ru", key: "ru" }
]
const selectLang = () => {
  showPicker.value = !showPicker.value
}
const onConfirm = ({ selectedOptions }) => {
  i18n.locale.value = selectedOptions[0].value;
  localStorage.setItem('lang', selectedOptions[0].value)
  Locale.use(i18n.locale.value, langType[i18n.locale.value]);
  selectLang()
}

const router = useRouter()
const backUrl = () => {
  router.go(-1)
}
onMounted(() => {
  Locale.use(i18n.locale.value, langType[i18n.locale.value]);
  curLangType.value = [i18n.locale.value]
})
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