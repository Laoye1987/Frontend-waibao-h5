<template>
  <NavBar leftText="修改密码" />
  <div class="change-pwd-box">
    <div class="item">
      <div class="label">新密码</div>
      <van-field class="input" v-model="newPwd" placeholder="请输入新密码" />
    </div>
    <div class="item">
      <div class="label">确认密码</div>
      <van-field class="input" v-model="confirmPwd" placeholder="请输入确认密码" />
    </div>
    <div class="item">
      <div class="label">旧密码</div>
      <van-field class="input" v-model="oldPwd" placeholder="请输入旧密码" />
    </div>
  </div>
  <div class="btn">
    <van-button type="primary" block>提交</van-button>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'

const newPwd = ref()
const confirmPwd = ref()
const oldPwd = ref()
</script>

<style scoped lang="less">
.change-pwd-box {
  padding: 0 18px;

  .item {
    margin-top: 18px;

    .label {
      font-size: 14px;
      color: #132E3D;
      margin-bottom: 10px;
    }

    .input {
      padding: 5px 20px;
      border: 1px solid rgba(3, 49, 75, .4);
      border-radius: 10px;
    }

    .tips {
      text-align: right;
      font-size: 12px;
      color: #a7a7a7;
      line-height: 1.5;
    }
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
</style>
