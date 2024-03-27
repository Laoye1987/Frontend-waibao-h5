<template>
  <div class="home">
    <div class="home-top"></div>
    <div class="home-low">
      <div class="home-low-item">
        <div class="label">熱門</div>
        <div class="card">
          <div class="card-item"></div>
          <div class="card-item"></div>
          <div class="card-item"></div>
        </div>
      </div>
      <div class="home-low-item">
        <div class="label">行情</div>
        <div class="list">
          <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TokenItem from "@/components/tokenItem.vue";
const list = ref(Array.from({ length: 10 }).map((_, index) => ({
  img: "",
  name: 'GBPUSD',
  abbr: 'GBPUSD',
  price: 1.27073,
  riseFall: Math.random().toFixed(2)
})))
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;

  &-top {
    padding: 22px 19px 27px;
    background: url('@/assets/images/homeBg.png') no-repeat;
    background-size: cover;
    min-height: 270px;
    box-sizing: border-box;
  }

  &-low {
    min-height: calc(100vh - 270px - 50px + 27px);
    margin-top: -27px;
    background-color: #f9f9f9;
    border-radius: 27px 27px 0 0;
    box-sizing: border-box;
    padding-top: 11px;

    &-item {
      &:first-child {
        margin-bottom: 16px;
      }

      .label {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        padding: 0 18px;
      }

      .card {
        display: flex;
        width: 100%;
        overflow: auto hidden;

        &::-webkit-scrollbar {
          display: none;
        }

        &-item {
          flex-shrink: 0;
          width: 150px;
          height: 155px;
          background: #FFFFFF;
          box-shadow: 0 1px 8px 2px hsla(0, 0%, 63.1%, .06);
          border-radius: 16px;
          margin-left: 19px;

          &:last-child {
            margin-right: 19px;
          }
        }
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: 7px;
        padding: 0 18px;
      }
    }
  }
}
</style>
