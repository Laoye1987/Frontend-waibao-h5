<template>
  <NavBar leftText="编辑" />
  <div class="edit-box">
    <div class="item">
      <van-field
        class="input"
        v-model="name"
        label="昵称"
        input-align="right" />
    </div>
    <div class="item avatar">
      <div class="label">头像</div>
      <van-uploader :after-read="afterRead" class="upload-avatar" />
    </div>
    <div class="btn">
      <van-button type="primary" block>提交</van-button>
    </div>
  </div>
</template>

<script setup>
const name = ref('user299137')

const afterRead = (file) => {

}
</script>

<style scoped lang="less">
.edit-box {
  padding: 20px 18px;

  .item {
    .input {
      border-bottom: 1px solid #f5f5f5;
    }
  }

  .avatar {
    padding: var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;


    .label {
      font-size: var(--van-cell-font-size);
    }

    .upload-avatar {
      // width: 20px;
      // height: 20px;
    }
  }

  .btn {
    position: fixed;
    left: 50%;
    bottom: 30px;
    width: 339px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
</style>
