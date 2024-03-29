<template>
  <div class="register">
    <Header :isLang="false" />
    <div class="register-logo">
      <img :src="logo" alt="">
    </div>
    <div class="register-title">
      <div class="title">{{ $t('register.register') }}</div>
      <div class="subtitle">{{ $t('register.tips') }}</div>
    </div>
    <div class="register-form">
      <van-field
        class="register-form-item"
        v-model="formData.email"
        :placeholder="$t('public.placeholderEmail')"
        :rules="[{ required: true, message: $t('public.placeholderEmail') }]" />
      <van-field
        class="register-form-item"
        v-model="formData.password"
        type="password"
        :placeholder="$t('public.placeholderPwd')"
        :rules="[{ required: true, message: $t('public.placeholderPwd') }]" />
      <van-field
        class="register-form-item"
        v-model="formData.againPwd"
        type="password"
        :placeholder="$t('register.againPwd')"
        :rules="[{ required: true, message: $t('register.againPwd') }]" />
      <van-field
        class="register-form-item"
        v-model="formData.inviteCode"
        :placeholder="$t('register.inviteCode')"
        :rules="[{ required: true, message: $t('register.inviteCode') }]" />
    </div>
    <div class="register-btn">
      <van-button round block color="#FFFFFF" @click="submit">
        <span class="text">{{ $t('public.submit') }}</span>
      </van-button>
    </div>
  </div>
</template>
  
  
<script setup>
import logo from '@/assets/images/logo.png'
import Header from '@/components/header.vue'
const formData = ref({
  email: "",
  password: "",
  againPwd: "",
  inviteCode: ""
})
// 提交
const submit = () => {
  console.log(formData.value);
}
</script>
  
  
<style lang="less" scoped>
@import '@/assets/less/account.less';

.register {
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