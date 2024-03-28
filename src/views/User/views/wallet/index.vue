<template>
  <div class="wallet">
    <NavBar leftText="返回">
      <template #right>
        <div class="add-wallet" @click="router.push('/addWallet')"></div>
      </template>
    </NavBar>
    <div class="tabs-box">
      <div class="tabs">
        <div class="item"
          @click="selectType(item)"
          :class="curType === item.value ? 'active' : ''"
          v-for="(item, index) in typeList"
          :key="index">
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="wallet-content">
      <div class="empty"></div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'

const router = useRouter()

const curType = ref('addr')
const typeList = [
  { label: "钱包地址", value: "addr" },
  { label: "银行卡", value: "card" },
]
const selectType = (item) => {
  curType.value = item.value
}
</script>

<style scoped lang="less">
.add-wallet {
  width: 13px;
  height: 13px;
  background-color: red;
}

.tabs-box {
  display: flex;
  justify-content: center;

  .tabs {
    width: 235px;
    background-color: rgba(3, 49, 75, .1);
    font-size: 12px;
    display: flex;
    line-height: 1.5;
    border-radius: 14px;

    .item {
      flex: 1;
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



.empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 286px;
  height: 182px;
  background-color: red;
}
</style>
