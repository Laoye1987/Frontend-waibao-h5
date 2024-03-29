<template>
  <div class="forgetPwd">
    <Header :isLang="false" />
    <div class="forgetPwd-logo">
      <img :src="logo" alt="">
    </div>
    <div class="forgetPwd-title">
      <div class="title">{{ $t('forgetPwd.forgetPwd') }}</div>
      <div class="subtitle">{{ $t('forgetPwd.tips') }}</div>
    </div>
    <div class="forgetPwd-form">
      <van-field
        class="forgetPwd-form-item"
        v-model="formData.email"
        :placeholder="$t('public.placeholderEmail')"
        :rules="[{ required: true, message: $t('public.placeholderEmail') }]" />
      <van-field
        class="forgetPwd-form-item"
        v-model="formData.password"
        type="password"
        :placeholder="$t('public.placeholderPwd')"
        :rules="[{ required: true, message: $t('public.placeholderPwd') }]" />
      <van-field
        class="forgetPwd-form-item"
        v-model="formData.vCode"
        :placeholder="$t('forgetPwd.vCode')"
        :rules="[{ required: true, message: $t('forgetPwd.vCode') }]">
        <template #button>
          <van-button size="small" :disabled="isSendCode" type="primary" @click="sendCode">
            <div v-if="!isSendCode">{{ $t('forgetPwd.send') }}</div>
            <div v-else>{{ codeTime }}</div>
          </van-button>
        </template>
      </van-field>
    </div>
    <div class="forgetPwd-btn" @click="submit">
      <van-button round block color="#FFFFFF">
        <span class="text">{{ $t('public.submit') }}</span>
      </van-button>
    </div>
  </div>
</template>
  
  
<script setup>
import logo from '@/assets/images/logo.png'
import Header from '@/components/header.vue'
import { useCode } from '@/hooks/getCode.js'
const { codeTime, isSendCode, getCode } = useCode()
const formData = ref({
  email: "",
  password: "",
  vCode: ""
})
const submit = () => {
  console.log(formData.value);
}
const sendCode = () => {
  getCode()
}
</script>
  
  
<style lang="less" scoped>
@import '@/assets/less/account.less';

.forgetPwd {
  padding: 22px 19px;
  box-sizing: border-box;
  min-height: 100vh;
  background: linear-gradient(0deg, #96f3ff, #2664fa);

  &-logo {
    width: 77px;
    height: 77px;
    margin-top: 55px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    line-height: 1.5;
    color: #FFFFFF;
    margin-bottom: 38px;

    .title {
      font-size: 33px;
      font-weight: 600;
    }

    .subtitle {
      font-size: 14px;
    }
  }

  &-form {
    display: flex;
    flex-direction: column;
    gap: 22px;

    &-item {
      border-radius: 16px;
    }
  }

  &-btn {
    margin: 110px 19px 0;

    .text {
      color: #3A7FF6;
    }
  }
}
</style>