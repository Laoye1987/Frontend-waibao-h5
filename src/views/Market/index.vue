<template>
  <div class="market">
    <div class="market-select">
      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch" />
    </div>
    <div class="market-tabs">
      <van-tabs v-model:active="active" animated swipeable sticky shrink>
        <van-tab title="收藏">
          <div class="list">
            <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
        <van-tab title="外匯">
          <div class="list">
            <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
        <van-tab title="指數">
          <div class="list">
            <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
        <van-tab title="大宗商品">
          <div class="list">
            <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
        <van-tab title="加密貨幣">
          <div class="list">
            <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import TokenItem from "@/components/tokenItem.vue";
const value = ref()
const list = ref(Array.from({ length: 10 }).map((_, index) => ({
  img: "",
  name: 'GBPUSD',
  abbr: 'GBPUSD',
  price: 1.27073,
  riseFall: Math.random().toFixed(2)
})))
</script>

<style scoped lang="less">
.market {
  padding-bottom: 50px;

  &-tabs {
    background-color: #f9f9f9;

    .list {
      display: flex;
      flex-direction: column;
      gap: 7px;
      padding: 0 18px;
      margin: 10px 0;
    }
  }
}
</style>