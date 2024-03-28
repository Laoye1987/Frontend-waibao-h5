<template>
  <div class="item" @click="jumpUrl">
    <div class="item-token">
      <img class="img" :src="props.item.img" alt="">
      <div class="title">
        <div>{{ props.item.name }}</div>
        <div>{{ props.item.abbr }}</div>
      </div>
    </div>
    <div class="item-price">{{ props.item.price }}</div>
    <div class="item-state" :class="props.item.riseFall > 0.1 ? 'up' : 'low'">{{ `${props.item.riseFall > 0.1 ? '+' :
      '-'}${props.item.riseFall}` }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      img: '',
      name: '',
      abbr: '',
      price: '',
      riseFall: ''
    })
  }
})

const router = useRouter();
const jumpUrl = () => {
  router.push('/echartDetails')
}
</script>

<style lang="less" scoped>
.item {
  display: grid;
  grid-template-columns: auto 75px 75px;
  margin-bottom: 7px;
  padding: 12px 10px;
  background-color: #fff;
  border-radius: 15px;

  &-token {
    display: flex;
    align-items: center;
    gap: 10px;

    .img {
      width: 34px;
      height: 34px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .title {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &-price {
    font-size: 14px;
    color: #132E3D;
    display: flex;
    align-items: center;
  }

  &-state {
    line-height: 34px;
    border-radius: 2px;
    text-align: center;
    color: #FFFFFF;
    box-sizing: border-box;
    font-size: 12px;
  }
}
</style>