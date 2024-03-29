<template>
  <div class="user-bg">
    <div class="user-box">
      <div class="section1">
        <div class="left">
          <img :src="getImageUrl('avator.png')" alt="">
        </div>
        <div class="right">
          <div class="user-name">user299137</div>
          <div class="user-id">ID: 245</div>
        </div>
      </div>
      <div class="section2">
        <div class="btn left-btn" @click="router.push('/wallet')">
          {{ $t('my.wallet') }}
        </div>
        <div class="btn right-btn" @click="router.push('/Edit')">
          {{ $t('my.edit') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const getImageUrl = (name) => {
  return new URL(`/src/assets/images/user/${name}`, import.meta.url).href;
}
</script>

<style scoped lang="less">
.user-bg {
  width: 100%;
  background: url('@/assets/images/user/bg-center.png') no-repeat;
  background-size: cover;
  padding: 22px 19px 44px 19px;
  box-sizing: border-box;

  .user-box {
    padding-top: 22px;
    padding-bottom: 22px;

    .section1 {
      display: flex;

      .left {
        width: 69px;
        height: 69px;
        margin-right: 16px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .user-name {
          font-size: 19px;
          color: #fff;
          font-weight: 700;
        }

        .user-id {
          font-size: 12px;
          color: #f3f3f3;
          margin-top: 11px;
        }
      }
    }

    .section2 {
      margin-top: 22px;
      display: flex;
      justify-content: space-around;

      .btn {
        width: 143px;
        height: 44px;
        display: flex;
        text-align: center;
        border-radius: 22px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .left-btn {
        color: #132e3d;
        background-color: #fff;
      }

      .right-btn {
        color: #fff;
        background: #2664fa;
      }
    }
  }

}
</style>
