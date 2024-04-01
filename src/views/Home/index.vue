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
        <div class="number">$0.000</div>
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
        <div class="label">
          <div>{{ $t('home.hot') }}</div>
          <div class="more">{{ $t('home.more') }}</div>
        </div>
        <div class="card">
          <div v-for="i in 3" :key="i" class="card-item">
            <div class="card-item-token">
              <img src="" alt="">
              <div class="name">GBPUSD</div>
            </div>
            <div :id="`chart${i}`"></div>
            <div class="card-item-price">
              <div class="left">$1.26211</div>
              <div class="right">-0.016</div>
            </div>
          </div>
        </div>
      </div>
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
import { init, dispose } from 'klinecharts'
import config from './chartConfig.js'

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

const chartLis = {
  chart1: null,
  chart2: null,
  chart3: null
}

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
function genData(timestamp = new Date().getTime(), length = 800) {
  let basePrice = 5000
  timestamp = Math.floor(timestamp / 1000 / 60) * 60 * 1000 - length * 60 * 1000
  const dataList = []
  for (let i = 0; i < length; i++) {
    const prices = []
    for (let j = 0; j < 4; j++) {
      prices.push(basePrice + Math.random() * 60 - 30)
    }
    prices.sort()
    const open = +(prices[Math.round(Math.random() * 3)].toFixed(2))
    const high = +(prices[3].toFixed(2))
    const low = +(prices[0].toFixed(2))
    const close = +(prices[Math.round(Math.random() * 3)].toFixed(2))
    const volume = Math.round(Math.random() * 100) + 10
    const turnover = (open + high + low + close) / 4 * volume
    dataList.push({ timestamp, open, high, low, close, volume, turnover })

    basePrice = close
    timestamp += 60 * 1000
  }
  return dataList
}
onMounted(() => {
  getList()
  Object.keys(chartLis).map((item, index) => {
    chartLis[item] = init(`chart${index + 1}`, {
      styles: config,
    })
    chartLis[item].setOffsetRightDistance(0)
    chartLis[item].applyNewData(genData())
  })
})
onUnmounted(() => {
  Object.keys(chartLis).map((item) => {
    // 销毁图表
    dispose(chartLis[item])
  })

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
        display: flex;
        justify-content: space-between;
        align-items: center;

        .more {
          font-size: 12px;
          color: #a7a7a7;
        }
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
          display: flex;
          flex-direction: column;
          padding: 14px 0;
          box-sizing: border-box;

          &:last-child {
            margin-right: 19px;
          }

          &-token {
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 0 7px;
            line-height: 1.5;

            img {
              width: 30px;
              height: 30px;
            }

            .name {
              font-size: 14px;
              color: #000000;
              font-weight: 600;
            }
          }

          #chart1,
          #chart2,
          #chart3 {
            width: 150px;
            height: 60px;
            touch-action: none
          }

          &-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding: 0 7px;
            box-sizing: border-box;
            line-height: 1.5;

            .left {
              font-size: 14px;
              font-weight: 600;
            }

            .right {
              font-size: 12px;
              color: rgb(233, 88, 43);
            }
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
