<template>
  <div class="operation-list-box">
    <div class="operation-list">
      <div class="item" v-for="item in operationList" :key="item.key" @click="functionMap[item.key]">
        <div class="icon">
          <img :src="getImageUrl(item.imgUrl)" alt="">
        </div>
        <div class="label">{{ item.name }}</div>
        <div class="value" v-if="item.value">
          <template v-if="item.key === 'maketModel'">
            <div class="up-down-icon">
              <img :src="getImageUrl(curModelValue == '0' ? 'icon-down-red.png' : 'icon-up-red.png')" alt="">
            </div>
          </template>
          <template v-else>
            {{ item.value }}
          </template>
        </div>
        <div class="right-icon" v-if="item.key !== 'version'">
          <van-icon size="10" name="/src/assets/images/user/icon-nest-arrow.png" />
        </div>
      </div>
    </div>
    <div class="logout-box">
      <div class="logout-btn" @click="handleLogout">注销</div>
    </div>
  </div>
  <PickerLang ref="pickerLangRef" />
  <PickerMaketModel ref="pickerMaketModelRef" :options="maketModelList" @confirm="handleConfirm" />
</template>

<script setup>
import PickerLang from '@/components/pickerLang.vue';
import PickerMaketModel from '@/components/myPicker.vue';

const router = useRouter()
const pickerLangRef = ref()
const pickerMaketModelRef = ref()

const operationList = [
  { key: 'realName', name: '实名认证', imgUrl: 'icon-real.png', value: '' },
  { key: 'language', name: '语言', imgUrl: 'icon-lang.png', value: '简体中文' },
  { key: 'changePwd', name: '修改密码', imgUrl: 'icon-password.png', value: '' },
  { key: 'maketModel', name: '市场模式', imgUrl: 'icon-market.png', value: 'x' },
  { key: 'customer', name: '线上客服', imgUrl: 'icon-service.png', value: '' },
  { key: 'aboutUs', name: '关于我们', imgUrl: 'icon-about.png', value: '' },
  { key: 'version', name: '版本', imgUrl: 'icon-about.png', value: '100' },
  { key: 'inviteCode', name: '邀请码', imgUrl: 'icon-invite.png', value: 'abcd' },
]

const functionMap = {
  realName() {
    router.push('/realName');
  },
  language() {
    pickerLangRef.value.selectLang();
  },
  changePwd() {
    router.push('/changePwd');
  },
  maketModel() {
    pickerMaketModelRef.value.show();
  },
  customer() {
    router.push('/customer');
  },
  aboutUs() {
    router.push('/aboutUs');
  },
  version() {

  },
  async inviteCode() {
    try {
      const text = operationList.find(item => item.key === 'inviteCode').value;
      await navigator.clipboard.writeText(text);
      showSuccessToast('复制成功');
    } catch (err) {
      showFailToast('复制成功');
    }
  }
}

const handleLogout = () => {
  localStorage.removeItem('token');
  router.push('/login');
}

const curModelValue = ref()
const maketModelList = [
  { text: "红跌绿涨", value: "0", key: "greenUp" },
  { text: "红涨绿跌", value: "1", key: "redUp" },
]
const handleConfirm = (value) => {
  curModelValue.value = value
}

function getImageUrl(name) {
  return new URL(`/src/assets/images/user/${name}`, import.meta.url).href;
}

</script>

<style scoped lang="less">
.operation-list-box {
  margin-top: -30px;
  border-radius: 25px 25px 0 0;
  background: #f9f9f9;
  padding-top: 10px;
  padding-bottom: var(--van-tabbar-height);

  .operation-list {
    margin-top: 25px;
    padding: 0 18px;

    .item {
      display: flex;
      align-items: center;
      background: #fff;
      height: 50px;
      border-radius: 15px;
      padding: 0 15px;
      margin-top: 10px;

      .icon {
        width: 28px;
        height: 28px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .label {
        font-size: 14px;
        color: #132e3d;
        margin-left: 10px;
        margin-right: auto;
      }

      .value {
        color: rgba(3, 49, 75, .4);
        font-size: 14px;

        .up-down-icon {
          width: 16px;
          height: 11px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .right-icon {
        margin-left: 12px;
        display: flex;
        align-items: center;
      }
    }
  }

  .logout-box {
    display: flex;
    justify-content: center;

    .logout-btn {
      display: flex;
      justify-content: center;
      width: 100px;
      margin: 25px 0;
      background: #f3f3f3;
      border-radius: 15px;
      font-size: 12px;
      color: #a7a7a7;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
}
</style>
