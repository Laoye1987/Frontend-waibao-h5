<template>
  <div class="login">
    <Header :isBack="false" />
    <div class="login-logo">
      <img :src="logo" alt="">
    </div>
    <div class="login-title">
      <div class="title">{{ $t('login.login') }}</div>
      <div class="subtitle">{{ $t('login.tips') }}</div>
    </div>
    <div class="login-form">
      <van-field
        class="login-form-item"
        v-model="formData.email"
        :placeholder="$t('public.placeholderEmail')"
        :rules="[{ required: true, message: $t('public.placeholderEmail') }]" />
      <van-field
        class="login-form-item"
        v-model="formData.password"
        type="password"
        :placeholder="$t('public.placeholderPwd')"
        :rules="[{ required: true, message: $t('public.placeholderPwd') }]" />
    </div>
    <div class="login-tips">
      <span>{{ $t('login.forgetPwd') }}</span>
      <span @click="jumpUrl('/forgetPwd')">{{ $t('login.retrieve') }}</span>
    </div>
    <div class="login-btn">
      <van-button round block color="#FFFFFF" @click="login">
        <span class="text">{{ $t('login.login') }}</span>
      </van-button>
    </div>
    <div class="login-tips">
      <span>{{ $t('login.noAccount') }}</span>
      <span @click="jumpUrl('/register')">{{ $t('login.register') }}</span>
    </div>
  </div>
</template>


<script setup>
import logo from '@/assets/images/logo.png'
import Header from '@/components/header.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const formData = ref({
  email: '',
  password: ''
})
//跳转
const jumpUrl = (item) => {
  router.push(item)
}
// 提交
const login = () => {
  console.log(formData.value);
  localStorage.setItem('token', 123)
  jumpUrl('/')
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