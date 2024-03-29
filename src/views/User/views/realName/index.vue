<template>
  <NavBar :leftText="$t('my.realName')" />
  <div class="real-name-box">
    <div class="item">
      <div class="label">{{ $t('my.real') }}</div>
      <van-field class="input" v-model="name" :placeholder="$t('public.placeholder')" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.IDNumber') }}</div>
      <van-field class="input" v-model="idNum" :placeholder="$t('public.placeholder')" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.front') }}</div>
      <van-uploader :after-read="afterRead1" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.back') }}</div>
      <van-uploader :after-read="afterRead2" />
    </div>
  </div>
  <div class="btn">
    <van-button type="primary" block>{{ $t('public.submit') }}</van-button>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'

const name = ref('')
const idNum = ref('')

const afterRead1 = () => { }
const afterRead2 = () => { }
</script>

<style scoped lang="less">
.real-name-box {
  padding: 0 18px;

  .item {
    margin-top: 18px;

    .label {
      font-size: 14px;
      color: #132E3D;
      margin-bottom: 10px;
    }

    .input {
      padding: 5px 20px;
      border: 1px solid rgba(3, 49, 75, .4);
      border-radius: 10px;
    }

    .tips {
      text-align: right;
      font-size: 12px;
      color: #a7a7a7;
      line-height: 1.5;
    }

    .btn {
      position: fixed;
      left: 50%;
      bottom: 30px;
      width: 339px;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }

}

.btn {
  position: fixed;
  left: 50%;
  bottom: 30px;
  width: 339px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
</style>
