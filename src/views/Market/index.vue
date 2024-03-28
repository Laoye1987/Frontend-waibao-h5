<template>
  <div class="market">
    <div class="market-select">
      <van-search
        show-action
        v-model="search"
        shape="round"
        placeholder="请输入搜索关键词">
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="market-tabs">
      <van-tabs
        class="tabs"
        v-model:active="active"
        animated
        swipeable
        sticky
        shrink
        @change="(name, title) => onChange(name, title)">
        <van-tab
          :title="item.label"
          v-for="(item, index) in typeList.title"
          :key="index">
          <div class="list" v-if="typeList.list.length > 0">
            <TokenItem
              v-for="(item2, index2) in typeList.list"
              :key="index2"
              :item="item2" />
          </div>
          <div class="noData" v-else>
            <van-loading v-if="loading" />
            <van-empty v-else />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import TokenItem from "@/components/tokenItem.vue";

const search = ref()
const active = ref()
const loading = ref(false)
const typeList = ref({
  title: [
    { label: '收藏', value: "collection" },
    { label: '外匯', value: "foreign" },
    { label: '指數', value: "index" },
    { label: '大宗商品', value: "commodities" },
    { label: '加密貨幣', value: "cryptocurrency" }
  ],
  list: []
})
// 搜索
const onClickButton = () => {
  console.log(search.value);
}
//监听切换
const onChange = (name, title) => {
  console.log(name, title);
  // 模拟
  getList()
};

//模拟请求
const getList = () => {
  loading.value = true
  typeList.value.list = []
  setTimeout(() => {
    typeList.value.list = Array.from({ length: 10 }).map((_, index) => ({
      img: "",
      name: 'GBPUSD',
      abbr: 'GBPUSD',
      price: 1.27073,
      riseFall: Math.random().toFixed(2)
    }))
    loading.value = false
  }, 1000)
}
onMounted(() => {
  getList()
})
</script>

<style scoped lang="less">
.market {
  height: 100%;

  &-tabs {
    background-color: #f9f9f9;
    height: calc(100% - 54px);

    .list {
      display: flex;
      flex-direction: column;
      gap: 7px;
      padding: 0 18px 50px;
      margin: 10px 0;
    }

    .noData {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 54px - 44px - 50px);
    }
  }
}
</style>