<template>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      v-model="curLangType"
      :columns="langList"
      @cancel="showPicker = false"
      @confirm="onConfirm" />
  </van-popup>
</template>

<script setup>
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

const i18n = useI18n()

const showPicker = ref(false)

const curLangType = ref([])

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

onMounted(() => {
  Locale.use(i18n.locale.value, langType[i18n.locale.value]);
  curLangType.value = [i18n.locale.value]
})

defineExpose({
  selectLang
})
</script>

<style scoped lang="scss"></style>
