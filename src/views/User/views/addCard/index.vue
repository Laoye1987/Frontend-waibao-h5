<template>
  <NavBar leftText="银行卡" />
  <div class="add-wallet-box">
    <div class="item">
      <div class="label">银行名称</div>
      <van-field
        class="input"
        v-model="cardName"
        autosize
        placeholder="银行名称" />
    </div>
    <div class="item">
      <div class="label">银行卡</div>
      <van-field
        class="input"
        v-model="cardNum"
        autosize
        placeholder="银行卡" />
    </div>
    <div class="item">
      <div class="label">开户人</div>
      <van-field
        class="input"
        v-model="cardPeople"
        autosize
        placeholder="开户人" />
    </div>
    <div class="item">
      <div class="label">银行地址</div>
      <van-field
        class="input"
        v-model="cardAddr"
        autosize
        placeholder="银行地址" />
    </div>
    <div class="item">
      <div class="label">银行国际程式码</div>
      <van-field
        class="input"
        v-model="cardCode"
        autosize
        placeholder="银行国际程式码" />
    </div>
    <div class="btn">
      <van-button type="primary" block @click="handleSave">保存</van-button>
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
