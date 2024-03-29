<template>
  <NavBar :leftText="$t('home.card')" />
  <div class="add-wallet-box">
    <div class="item">
      <div class="label">{{ $t('home.bankName') }}</div>
      <van-field
        class="input"
        v-model="cardName"
        autosize
        :placeholder="$t('public.placeholder')" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.bankCard') }}</div>
      <van-field
        class="input"
        v-model="cardNum"
        autosize
        :placeholder="$t('public.placeholder')" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.accountHolder') }}</div>
      <van-field
        class="input"
        v-model="cardPeople"
        autosize
        :placeholder="$t('public.placeholder')" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.bankAddr') }}</div>
      <van-field
        class="input"
        v-model="cardAddr"
        autosize
        :placeholder="$t('public.placeholder')" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.bankCode') }}</div>
      <van-field
        class="input"
        v-model="cardCode"
        autosize
        :placeholder="$t('public.placeholder')" />
    </div>
    <div class="btn">
      <van-button type="primary" block @click="handleSave">{{ $t('public.submit') }}</van-button>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'

const cardName = ref()
const cardNum = ref()
const cardPeople = ref()
const cardAddr = ref()
const cardCode = ref()

const handleSave = () => {
  console.log('保存');
}
</script>

<style scoped lang="less">
.add-wallet-box {
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

    .field {}

    .tips {
      text-align: right;
      font-size: 12px;
      color: #a7a7a7;
      line-height: 1.5;
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
}
</style>
