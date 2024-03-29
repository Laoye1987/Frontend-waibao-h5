<template>
  <div class="news">
    <div class="news-title">
      {{ $t('news.title') }}
    </div>
    <div class="news-banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="news-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="$t('public.noData')"
          @load="onLoad">
          <div class="item" v-for="item in list" :key="item" :title="item">
            <div class="left">
              <div class="title">ETtoday財經雲</div>
              <div class="time">2024-03-07 16:05:00</div>
            </div>
            <div class="right">
              <img src="" alt="">
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup>
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    loading.value = false;
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>

<style lang="less" scoped>
.news {
  padding: 20px 18px 0;

  &-title {
    font-size: 20px;
    color: #000000;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &-banner {
    border-radius: 4px;
    overflow: hidden;

    .my-swipe .van-swipe-item {
      width: 339px;
      height: 130px;
      background-color: #39a9ed;
    }
  }

  &-list {
    .item {
      padding: 15px 0;
      margin: 15px 0;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70px;

        .title {
          font-size: 14px;
          color: #000000;
          font-weight: 600;
        }

        .time {
          font-size: 12px;
          color: rgba(3, 49, 75, .4);
        }
      }

      .right {
        width: 100px;
        height: 70px;
        border-radius: 5px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>