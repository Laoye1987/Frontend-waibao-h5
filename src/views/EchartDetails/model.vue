<template>
    <van-action-sheet v-model:show="show">
        <div class="content">
            <div class="content-types">123456</div>
        </div>
    </van-action-sheet>
</template>

<script setup>
const show = ref(false)
const setShow = () => {
    show.value = !show.value
}
defineExpose({
    setShow
})
</script>