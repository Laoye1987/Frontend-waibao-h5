<template>
  <div class="position">
    <div class="position-top">
      <div>$0</div>
    </div>
    <div class="position-low">
      <div class="position-low-types">
        <div
          class="btn"
          @click="curType = item.value"
          :class="curType === item.value ? 'active' : ''"
          v-for="(item, index) in typeList"
          :key="index">
          {{ item.label }}
        </div>
      </div>
      <div class="position-low-list">
        <van-empty />
      </div>
    </div>
  </div>
</template>

<script setup>
const curType = ref('position')
const typeList = [
  { label: "持倉", value: "position" },
  { label: "委託", value: "entrustment" },
  { label: "歷史", value: "history" }
]
</script>

<style lang="less" scoped>
.position {
  padding-bottom: 50px;

  &-top {
    padding: 22px 19px 27px;
    background: url('@/assets/images/homeBg.png') no-repeat;
    background-size: cover;
    min-height: 270px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    line-height: 1.5;
    color: #ffffff;
  }

  &-low {
    min-height: calc(100vh - 270px - 50px + 27px);
    margin-top: -27px;
    background-color: #f9f9f9;
    border-radius: 27px 27px 0 0;
    box-sizing: border-box;
    padding: 20px 18px 0;

    &-types {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      line-height: 1.5;
      color: #132E3D;

      .btn {
        padding: 10px 25px;
        background-color: #f3f3f3;
        border-radius: 17px;
      }

      .active {
        background-color: #d2eeff;
        color: #2664fa;
        font-weight: 600;
      }
    }

    &-list {
      margin-top: 10px;
    }
  }
}
</style>
