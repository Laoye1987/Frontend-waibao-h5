import { ref } from 'vue'

export const useCode = () => {
  /** 获取验证码 */
  // 倒计时长
  const codeTime = ref(60)
  // 是否已发送
  const isSendCode = ref(false)
  const getCode = () => {
    codeTime.value = 60
    isSendCode.value = true
    const timer = setInterval(() => {
      if (codeTime.value <= 0) {
        isSendCode.value = false
        clearInterval(timer)
        return
      }
      codeTime.value -= 1
    }, 1000)
  }
  return {
    codeTime,
    isSendCode,
    getCode
  }
}
