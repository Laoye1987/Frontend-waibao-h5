<template>
  <div class="details">
    <div class="details-navBar">
      <div class="left" @click="onClickLeft">
        <van-icon name="arrow-left" />
      </div>
      <div class="right">
        <div class="item"
          @click="selectType(item)"
          :class="curType === item.value ? 'active' : ''"
          v-for="(item, index) in typeList"
          :key="index">
          {{ $t(item.label) }}
        </div>
      </div>
    </div>
    <div class="details-content">
      <van-empty />
    </div>
  </div>
</template>
<script setup>
const router = useRouter()
const curType = ref('out')
const typeList = [
  { label: "public.out", value: "out" },
  { label: "public.enter", value: "enter" },
]
const selectType = (item) => {
  curType.value = item.value
}

const onClickLeft = () => {
  router.go(-1)
}
</script>
  
<style lang="less" scoped>
.details {
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
    min-height: calc(100vh - 46px)
  }
}
</style>