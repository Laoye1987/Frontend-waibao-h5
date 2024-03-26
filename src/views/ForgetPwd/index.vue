<template>
  <div class="forgetPwd">
    <Header :isLang="false" />
    <div class="forgetPwd-logo">
      <img :src="logo" alt="">
    </div>
    <div class="forgetPwd-title">
      <div class="title">找 回</div>
      <div class="subtitle">找回加入</div>
    </div>
    <div class="forgetPwd-form">
      <van-field
        class="forgetPwd-form-item"
        v-model="username"
        placeholder="請輸入郵箱地址"
        :rules="[{ required: true, message: '請輸入郵箱地址' }]" />
      <van-field
        class="forgetPwd-form-item"
        v-model="password"
        type="password"
        placeholder="請輸入密碼"
        :rules="[{ required: true, message: '請輸入密碼' }]" />
      <van-field
        class="forgetPwd-form-item"
        v-model="vCode"
        placeholder="驗證碼"
        :rules="[{ required: true, message: '請輸入驗證碼' }]">
        <template #button>
          <van-button size="small" type="primary">發送</van-button>
        </template>
      </van-field>
    </div>
    <div class="forgetPwd-btn">
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