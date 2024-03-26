<template>
  <div class="login">
    <Header :isBack="false" />
    <div class="login-logo">
      <img :src="logo" alt="">
    </div>
    <div class="login-title">
      <div class="title">登 錄</div>
      <div class="subtitle">登入以繼續</div>
    </div>
    <div class="login-form">
      <van-field
        class="login-form-item"
        v-model="username"
        placeholder="請輸入郵箱地址"
        :rules="[{ required: true, message: '請輸入郵箱地址' }]" />
      <van-field
        class="login-form-item"
        v-model="password"
        type="password"
        placeholder="請輸入密碼"
        :rules="[{ required: true, message: '請輸入密碼' }]" />
    </div>
    <div class="login-tips">
      <span>忘記密碼了？</span>
      <span @click="jumpUrl('/forgetPwd')">找回</span>
    </div>
    <div class="login-btn">
      <van-button round block color="#FFFFFF">
        <span class="text">登 錄</span>
      </van-button>
    </div>
    <div class="login-tips">
      <span>沒有帳號？</span>
      <span @click="jumpUrl('/register')">注 冊</span>
    </div>
  </div>
</template>


<script setup>
import logo from '@/assets/images/logo.png'
import Header from '@/components/header.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const jumpUrl = (item) => {
  router.push(item)
}
</script>


<style lang="less" scoped>
@import '@/assets/less/account.less';

.login {
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

  &-tips {
    font-size: 15px;
    text-align: center;
    color: hsla(0, 0%, 100%, .6);
    margin-top: 16px;

    span {
      &:last-child {
        font-weight: 600;
        color: #FFFFFF;
      }
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