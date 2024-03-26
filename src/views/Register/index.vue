<template>
  <div class="register">
    <Header :isLang="false" />
    <div class="register-logo">
      <img :src="logo" alt="">
    </div>
    <div class="register-title">
      <div class="title">注 冊</div>
      <div class="subtitle">注冊加入</div>
    </div>
    <div class="register-form">
      <van-field
        class="register-form-item"
        v-model="username"
        placeholder="請輸入郵箱地址"
        :rules="[{ required: true, message: '請輸入郵箱地址' }]" />
      <van-field
        class="register-form-item"
        v-model="password"
        type="password"
        placeholder="請輸入密碼"
        :rules="[{ required: true, message: '請輸入密碼' }]" />
      <van-field
        class="register-form-item"
        v-model="password"
        type="password"
        placeholder="再次確認您的密碼"
        :rules="[{ required: true, message: '再次確認您的密碼' }]" />
      <van-field
        class="register-form-item"
        v-model="password"
        type="password"
        placeholder="請輸入邀請碼"
        :rules="[{ required: true, message: '請輸入邀請碼' }]" />
    </div>
    <div class="register-btn">
      <van-button round block color="#FFFFFF">
        <span class="text">提 交</span>
      </van-button>
    </div>
  </div>
</template>
  
  
<script setup>
import logo from '@/assets/images/logo.png'
import Header from '@/components/header.vue'
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