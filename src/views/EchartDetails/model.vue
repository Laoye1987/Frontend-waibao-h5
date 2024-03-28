<template>
  <van-action-sheet v-model:show="show" closeable style="max-height:95vh;height:95vh">
    <div class="content">
      <div class="content-header">
        <div
          @click="curType = item.value"
          :class="curType === item.value ? 'active' : ''"
          class="content-header-item"
          v-for="(item, index) in typeList"
          :key="index">
          {{ item.label }}
        </div>
      </div>
      <div class="content-number">
        <div class="number">$ 1.26342</div>
        <div class="title">市价</div>
      </div>
      <div class="content-input">
        <div class="item" v-if="curType === 'a'">
          <div class="input">
            <div>掛單價格</div>
            <van-field v-model="number" type="number" placeholder="请输入" />
            <van-switch v-model="checked" size="14px" />
          </div>
          <div class="tips">價格限制&gt=1.26259</div>
        </div>
        <div class="item">
          <div class="input">
            <div>止盈</div>
            <van-field v-model="number" type="number" placeholder="请输入" />
            <van-switch v-model="checked" size="14px" />
          </div>
          <div class="tips">價格限制&lt=1.26284 </div>
        </div>
        <div class="item">
          <div class="input">
            <div>止損</div>
            <van-field v-model="number" type="number" placeholder="请输入" />
            <van-switch v-model="checked" size="14px" />
          </div>
          <div class="tips">價格限制&gt=1.26284</div>
        </div>
        <div class="item">
          <div class="input">
            <div>数量<span class="sublabel">(0.01~99999.99)</span></div>
            <van-field v-model="number" type="number" placeholder="请输入" />
          </div>
        </div>
        <div class="tips">槓桿：100</div>
        <div class="tips">手續費：0USDT</div>
        <div class="tips">參攷保證金：10USDT</div>
      </div>
      <div class="content-btn">
        <van-button round type="danger" size="normal" block v-if="props.buySellType === 'sell'">賣出 (可用餘額:0USDT)</van-button>
        <van-button round type="primary" size="normal" block v-else>买入 (可用餘額:0USDT)</van-button>
      </div>
    </div>
  </van-action-sheet>
</template>

<script setup>
const props = defineProps({
  buySellType: {
    type: String,
    default: "sell"
  }
})
const show = ref(false)
const setShow = () => {
  show.value = !show.value
  curType.value = 'a'
}

const curType = ref('a')
const typeList = [
  { label: "市价", value: 'a' },
  { label: "挂单", value: 'b' }
]
const selectType = () => {

}
defineExpose({
  setShow
})
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  padding: 18px;
  box-sizing: border-box;
  background-color: rgb(249, 249, 249);

  &-header {
    background-color: rgba(3, 49, 75, .1);
    box-sizing: border-box;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px 15px;
    border-radius: 20px;
    font-size: 16px;
    color: #132E3D;

    &-item {
      display: inline-block;
      padding: 6px 15px;
      text-align: center;
      flex: 1;
      line-height: 1.5;
    }

    .active {
      background-color: #3a7ff6;
      color: #fff;
      border-radius: 20px;
    }
  }

  &-number {
    border: 1px #eee solid;
    text-align: center;
    line-height: 1.5;
    border-radius: 14px;
    padding: 10px 0;
    background: #FFFFFF;

    .number {
      color: #33cd99;
      font-weight: 700;
      font-size: 34px;
    }

    .title {
      font-size: 12px;
      font-weight: 600;
    }
  }

  &-input {
    .item {
      margin: 12px 0;

      .input {
        display: grid;
        grid-template-columns: 130px 150px auto;
        align-items: center;
        border-radius: 12px !important;
        background: #FFFFFF;
        height: 42px;
        padding: 5px;
        box-sizing: border-box;
        font-size: 14px;

        .sublabel {
          font-size: 12px;
        }
      }
    }

    .tips {
      margin-top: 3px;
      color: #a7a7a7;
      line-height: 1.5;
      font-size: 12px;
    }
  }

  &-btn {
    margin-top: 50px;
  }
}
</style>