<template>
  <div class="customer">
    <van-nav-bar
      title="客服"
      left-arrow
      @click-left="onClickLeft" />
    <iframe
      src="https://vm.lenteiga.com/0gv1rmlahtf6w12kidlt3x2qb0"
      style="position: absolute; display: block; border: 0px; top: 44px; left: 0px; width: 375px; height: 623px;">
    </iframe>
  </div>
</template>

<script setup>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
</script>