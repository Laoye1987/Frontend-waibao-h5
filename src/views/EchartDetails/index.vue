<template>
  <div class="details">
    <div class="details-header">
      <div class="left" @click="onClickLeft">
        <van-icon size="18" name="arrow-left" />
        <div>行情</div>
      </div>
      <div class="rigth" @click="selectStar">
        <van-icon v-if="isStar" :name="unStar" />
        <van-icon v-else :name="star" />
      </div>
    </div>
    <div class="details-echart">
      <div class="details-echart-container">
        <div class="info">
          <div class="left">
            <div class="img"><img src="" alt=""></div>
            <div class="title">
              <div>
                <span>GBPUSD</span>
                <span>GBPUSD</span>
              </div>
              <div>$1.22266</div>
            </div>
          </div>
          <div class="right">
            <div class="btn">+0.00125</div>
          </div>
        </div>
        <div id="chart" />
      </div>
    </div>
    <div class="details-time">
      <div
        @click="handleTime(item)"
        :class="item.value === time ? 'active' : ''"
        class="btn"
        v-for="(item, index) in timeOptions"
        :key="index">
        {{ item.label }}
      </div>
    </div>
    <div class="details-info">
      <div class="label">统计</div>
      <div class="info">
        <div class="item">
          <div>高</div>
          <div>1.26666</div>
        </div>
        <div class="item">
          <div>低</div>
          <div>1.26666</div>
        </div>
        <div class="item">
          <div>開</div>
          <div>1.26666</div>
        </div>
        <div class="item">
          <div>總量</div>
          <div>1.26666</div>
        </div>
      </div>
    </div>
    <div class="details-btn">
      <van-button round block type="primary" @click="operation('buy')">买入</van-button>
      <van-button round block type="danger" @click="operation('sell')">卖出</van-button>
    </div>
    <Model ref="modelRef" :buySellType="buySellType" />
  </div>
</template>

<script setup>
import generatedDataList from "@/utils/demo.js";
import { init, dispose } from 'klinecharts'
import config from './chartConfig.js'

import Model from "./model.vue";
import unStar from '@/assets/images/unStar.png'
import star from '@/assets/images/star.png'


const router = useRouter()

const buySellType = ref()
const modelRef = ref()
// 买入卖出
const operation = (type) => {
  modelRef.value.setShow()
  buySellType.value = type
}

// 初始化图表
let chart = null
// 收藏
const isStar = ref(false)
const selectStar = () => {
  isStar.value = !isStar.value
}
// 切换时间
const time = ref('1m')
const timeOptions = [
  {
    label: "1m",
    value: "1m",
  },
  {
    label: "5m",
    value: "5m",
  },
  {
    label: "15m",
    value: "15m",
  },
  {
    label: "30m",
    value: "30m",
  },
  {
    label: "1H",
    value: "1H",
  },
  {
    label: "1D",
    value: "1D",
  },
]
const handleTime = (item) => {
  time.value = item.value
  console.log(e);
}
//返回
const onClickLeft = () => {
  router.go(-1)
}
// 模拟数据
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
  chart = init('chart', config)
  chart.setStyles({
    yAxis: { inside: 'inside' },
    candle: {
      tooltip: { custom: () => [] }
    }
  })
  // 为图表添加数据
  chart.applyNewData(genData())
  const updateData = () => {
    setTimeout(() => {
      const dataList = chart.getDataList();
      const lastData = dataList[dataList.length - 1];
      const newData = generatedDataList(
        lastData.timestamp,
        lastData.close,
        1
      )[0];
      newData.timestamp += 60 * 1000;
      chart.updateData(newData);
      updateData(chart);
    }, 1000);
  };
  chart.applyNewData(generatedDataList());
  updateData();
})

onUnmounted(() => {
  // 销毁图表
  dispose(chart)
})
</script>

<style lang="less" scoped>
.details {
  background-color: #f9f9f9;
  height: 100vh;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 46px;
    box-sizing: border-box;

    .left {
      font-size: 14px;
      font-weight: 600;
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  &-echart {
    padding: 15px 18px;
    min-height: 357px;
    box-sizing: border-box;

    &-container {
      background-color: #FFFFFF;
      border-radius: 14px;
      padding: 12px 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 13px;
        font-size: 12px;

        .left {
          display: flex;
          gap: 10px;
          align-items: center;

          .img {
            width: 34px;
            height: 34px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .title {
            div {
              font-weight: 700;

              &:first-child {
                span {
                  line-height: 1.5;

                  &:last-child {
                    margin-left: 5px;
                    color: #a7a7a7;
                    font-weight: 100;
                  }
                }
              }

              &:last-child {
                font-size: 20px;
                line-height: 1.5;
              }
            }
          }
        }

        .right {
          .btn {
            padding: 5px 10px;
            border-radius: 14px;
            color: rgb(233, 88, 43);
            background: rgb(255, 239, 234);
          }
        }
      }

      #chart {
        width: 100%;
        height: 249px;
        position: relative;
      }
    }
  }

  &-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;

    .btn {
      padding: 5px 10px;
      text-align: center;
      background: #f3f3f3;
      border-radius: 12px;
      font-size: 12px;
    }

    .active {
      color: #2664fa;
      background-color: #d2eeff;
    }
  }

  &-info {
    padding: 30px 18px;

    .label {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .info {
      border-radius: 14px;
      padding: 10px;
      background: #FFFFFF;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 16px;
      line-height: 1.5;
      gap: 15px;

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 140px;
      }
    }
  }

  &-btn {
    padding: 0 18px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
</style>