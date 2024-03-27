<template>
  <div class="operation-list-box">
    <div class="operation-list">
      <div class="item" v-for="item in operationList" :key="item.key" @click="functionMap[item.key]">
        <div class="icon"></div>
        <div class="label">{{ item.name }}</div>
        <div class="value">
          <template v-if="item.key === 'maketModel'">
            <div class="up-down-icon">{{ pickerMaketModelRef?.curModel[0] }}</div>
          </template>
          <template v-else>
            {{ item.value }}
          </template>
        </div>
        <div class="right-icon" v-if="item.key !== 'version'"></div>
      </div>
    </div>
    <div class="logout-box">
      <div class="logout-btn" @click="handleLogout">注销</div>
    </div>
  </div>
  <PickerLang ref="pickerLangRef" />
  <PickerMaketModel ref="pickerMaketModelRef" />
</template>

<script setup>
import PickerLang from '@/components/pickerLang.vue';
import PickerMaketModel from './pickerMaketModel.vue';

const router = useRouter()
const pickerLangRef = ref()
const pickerMaketModelRef = ref()

const operationList = [
  { key: 'realName', name: '实名认证', imgUrl: 'icon-add', value: '' },
  { key: 'language', name: '语言', imgUrl: 'icon-add', value: '简体中文' },
  { key: 'changePwd', name: '修改密码', imgUrl: 'icon-add', value: '' },
  { key: 'maketModel', name: '市场模式', imgUrl: 'icon-add', value: '' },
  { key: 'customer', name: '线上客服', imgUrl: 'icon-add', value: '' },
  { key: 'aboutUs', name: '关于我们', imgUrl: 'icon-add', value: '' },
  { key: 'version', name: '版本', imgUrl: 'icon-add', value: '100' },
  { key: 'inviteCode', name: '邀请码', imgUrl: 'icon-add', value: 'abcd' },
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
  console.log('注销');
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
        background-color: red;
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
          background-color: red;
        }
      }

      .right-icon {
        width: 4px;
        height: 8px;
        background-color: red;
        margin-left: 12px;
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
