<template>
  <div class="notice">
    <div class="notice-navBar">
      <div class="left" @click="onClickLeft">
        <van-icon name="arrow-left" />
        <div>入金</div>
      </div>
      <div class="right">
        <div class="item"
          @click="selectType(item)"
          :class="curType === item.value ? 'active' : ''"
          v-for="(item, index) in typeList"
          :key="index">
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="notice-content">
      <div class="address" v-if="curType === 'addr'">
        <div class="item">
          <div class="label">货币选择</div>
          <van-field
            class="input"
            v-model="fieldValue"
            is-link
            readonly
            placeholder="请选择"
            @click="showPicker = true" />
        </div>
        <div class="item">
          <div class="label">金额</div>
          <van-field class="input" v-model="money" placeholder="请输入金额" />
          <div class="tips">參攷保證金: 0.000USDT</div>
        </div>
        <div class="item">
          <div class="label">凭证</div>
          <van-uploader :after-read="afterRead" />
        </div>
        <div class="item">
          <div class="label">將截圖提交到以下地址</div>
          <div class="img">
            <img src="" alt="">
          </div>
        </div>
        <div class="copy">
          <div>TFysUwA6KvStAAr2WqMUx8hgWwpKkgThpo</div>
          <van-icon name="orders-o" @click="copy" />
        </div>
        <div class="btn">
          <van-button type="primary" block>块级元素</van-button>
        </div>
      </div>
      <div class="card" v-else>
        <van-empty />
      </div>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm" />
    </van-popup>
  </div>
</template>
<script setup>
const router = useRouter()

const money = ref()
const curType = ref('addr')
const typeList = [
  { label: "钱包地址", value: "addr" },
  { label: "银行卡", value: "card" },
]
const selectType = (item) => {
  curType.value = item.value
}

const onClickLeft = () => {
  router.go(-1)
}
const copy = async () => {
  try {
    const text = operationList.find(item => item.key === 'inviteCode').value;
    await navigator.clipboard.writeText(text);
    showSuccessToast('复制成功');
  } catch (err) {
    showFailToast('复制成功');
  }
}
// demo
const columns = ref([
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
]);

const fieldValue = ref('');
const showPicker = ref(false);

const afterRead = (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
};
</script>
      
<style lang="less" scoped>
.notice {

  &-navBar {
    padding: 0 15px;
    box-sizing: border-box;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      font-size: 14px;
      font-weight: 600;
      display: flex;
      gap: 10px;
    }

    .right {
      background-color: rgba(3, 49, 75, .1);
      font-size: 12px;
      display: flex;
      line-height: 1.5;
      border-radius: 14px;

      .item {
        display: inline-block;
        padding: 6px 15px;
        text-align: center;
      }

      .active {
        background: #3a7ff6;
        color: #FFFFFF;
        border-radius: 14px;
      }
    }
  }

  &-content {
    padding: 0 18px;
    box-sizing: border-box;

    .address {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-top: 15px;

      .item {

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

        .img {
          text-align: center;
          padding: 20px;

          img {
            width: 120px;
            height: 120px;
          }
        }
      }

      .copy {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 20px;
        border: 1px solid rgba(3, 49, 75, .4);
        border-radius: 10px;
      }

      .btn {
        margin: 20px 0;
      }
    }

    .card {}
  }
}
</style>