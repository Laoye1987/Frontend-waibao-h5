<template>
  <NavBar :leftText="$t('my.newWallet')" />
  <div class="add-wallet-box">
    <div class="item">
      <div class="label">{{ $t('home.tokenSelect') }}</div>
      <van-field
        class="input"
        v-model="fieldValue"
        is-link
        readonly
        :placeholder="$t('public.placeholder')"
        @click="myPickerRef.show()" />
    </div>
    <div class="item">
      <div class="label">{{ $t('my.addAddr') }}</div>
      <van-field
        class="input"
        v-model="addr"
        rows="3"
        autosize
        type="textarea"
        :placeholder="$t('public.placeholder')" />
    </div>
    <div class="btn">
      <van-button type="primary" block @click="handleSave">{{ $t('my.preserve') }}</van-button>
    </div>
  </div>
  <MyPicker ref="myPickerRef" :options="moneyOptions" @confirm="handleConfirm" />
</template>

<script setup>
import NavBar from '@/components/navBar.vue'
import MyPicker from '@/components/myPicker.vue'

const fieldValue = ref('')
const myPickerRef = ref()
const moneyOptions = [
  { text: "TRC20", value: "0", key: "0" },
  { text: "ERC20", value: "1", key: "1" },
  { text: "ETH", value: "2", key: "2" },
  { text: "BTC", value: "3", key: "3" },
]
const handleConfirm = (value, text) => {
  fieldValue.value = text
}

const addr = ref('')

const handleSave = () => {
  console.log('保存', fieldValue.value, addr.value);
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
