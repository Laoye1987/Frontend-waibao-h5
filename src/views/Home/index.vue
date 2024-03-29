<template>
  <div class="home">
    <div class="home-top">
      <div class="home-top-header">
        <div class="left">
          <img class="logo" :src="logo" alt="">
          <div>userName</div>
        </div>
        <div class="right">
          <van-icon size="25" @click="jumpUrl('/customer')" :name="service" />
          <van-icon size="25" @click="jumpUrl('/notice')" :name="tips" />
        </div>
      </div>
      <div class="home-top-account">
        <div class="title">
          <div class="left">{{ $t('home.account') }}</div>
          <div class="right" @click="selectAccount">
            <van-icon :name="exchange" />
            <div v-if="curType === 'real'">{{ $t('home.real') }}</div>
            <div v-else>{{ $t('home.demo') }}</div>
          </div>
        </div>
        <div class="number">
          $0.000
        </div>
        <div class="operation">
          <div class="left">
            <div class="btn" @click="jumpUrl('/enter')"> {{ $t('public.enter') }}</div>
            <div class="btn out" @click="jumpUrl('/out')"> {{ $t('public.out') }}</div>
          </div>
          <div class="right">
            <van-icon :name="order" @click="jumpUrl('/fundsDetails')" />
          </div>
        </div>
      </div>
    </div>
    <div class="home-low">
      <div class="home-low-item">
        <div class="label">{{ $t('home.market') }}</div>
        <div class="list">
          <TokenItem v-for="(item, index) in list" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showConfirmDialog } from 'vant';

import exchange from '@/assets/images/home/exchange.png'
import order from '@/assets/images/home/order.png'
import logo from '@/assets/images/logo.png'
import service from '@/assets/images/home/service.png'
import tips from '@/assets/images/home/tips.png'
import TokenItem from "@/components/tokenItem.vue";

const i18n = useI18n()
const router = useRouter()
//real 真实 ,demo 虚拟
const curType = ref('real')
const list = ref([])

// 切换账号
const selectAccount = () => {
  showConfirmDialog({
    title: i18n.t('home.prompt'),
    message: i18n.t('home.tips', {
      type1: curType.value === 'real' ? i18n.t('home.real') : i18n.t('home.demo'),
      type2: curType.value === 'real' ? i18n.t('home.demo') : i18n.t('home.real')
    }),
  }).then(() => {
    curType.value = curType.value === 'real' ? 'demo' : 'real'
    // on confirm
  }).catch(() => {
    // on cancel
  });
}
// 跳转路由
const jumpUrl = (item) => {
  router.push(item)
}
// 请求
const getList = () => {
  setTimeout(() => {
    list.value = Array.from({ length: 10 }).map((_, index) => ({
      img: "",
      name: 'GBPUSD',
      abbr: 'GBPUSD',
      price: 1.27073,
      riseFall: Math.random().toFixed(2)
    }))
  }, 1000)
}
onMounted(() => {
  getList()
})
</script>

<style lang="less" scoped>
.home {

  &-top {
    padding: 22px 19px 27px;
    background: url('@/assets/images/homeBg.png') no-repeat;
    background-size: cover;
    min-height: 270px;
    box-sizing: border-box;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #FFFFFF;

        .logo {
          width: 40px;
          height: 40px;
        }
      }

      .right {
        display: flex;
        gap: 10px;
      }
    }

    &-account {
      padding: 21px 0;
      color: #F3F3F3;

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        line-height: 1.5;
        margin-bottom: 7px;

        .right {
          display: flex;
          gap: 4px;
          align-items: center;
          background-color: #2664FA;
          padding: 8px;
          border-radius: 15px;
        }
      }

      .number {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 15px;
      }

      .operation {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          gap: 10px;
          font-size: 12px;

          .btn {
            min-width: 100px;
            background-color: #FFFFFF;
            padding: 10px 18px;
            text-align: center;
            border-radius: 15px;
            color: #000000;
            box-sizing: border-box;
          }

          .out {
            background-color: #2664FA;
            color: #FFFFFF;
          }
        }
      }
    }
  }

  &-low {
    min-height: calc(100vh - 270px - 50px + 27px);
    margin-top: -27px;
    background-color: #f9f9f9;
    border-radius: 27px 27px 0 0;
    box-sizing: border-box;
    padding-top: 11px;
    padding-bottom: 50px;

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
