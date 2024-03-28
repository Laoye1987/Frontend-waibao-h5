<template>
  <NavBar leftText="关于我们" />
  <div class="content">
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'

const content = "<p><br></p><h1 style=\"text-align: center;\"><span style=\"font-size: 13px;\">全球经验和本地专家支持</span></h1><p style=\"text-align: center;\"><span style=\"font-size: 13px;\">ST6（Smart AI Trading 6）是一家英国的证券经纪公司。</span></p><p style=\"text-align: center;\"><span style=\"font-size: 13px;\">我们的客户享受准确的订单执行，高竞争力的价格，以及卓越的客户服务。</span></p><p style=\"text-align: center;\"><span style=\"font-size: 13px;\">借助我们增强的专用服务器，您可以访问安全便捷的交易平台。</span></p><p style=\"text-align: center;\"><span style=\"font-size: 13px;\">ST6遵守英国的法律法规。Smart AI Trading 6 为零售和专业客户提供出色的解决方案，确保在 ST6商标下进行有效的多资产外汇/差价合约交易。</span></p><p style=\"text-align: start;\"><br></p><h3 style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们的优势</span></h3><p style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们提供世界各大热门金融市场中的 500 多种产品，致力于让客户享受最佳的交易条件。 &nbsp;我们的交易平台提供闪电订单处理速度，凭借毫秒级别的速度至今已处理大量订单。</span></p><p style=\"text-align: start;\"><span style=\"font-size: 13px;\">为了满足每一位交易者的需求，我们提供不同类型的账户、交易工具和多种投资选项。我们专业的客户代表使用 9 种语言，提供每周 5 天，每天 24 小时的服务。快速执行、高竞争力的点差及卓越的客户支持，是我们始终遵循的黄金准则。</span></p><p style=\"text-align: start;\"><br></p><h3 style=\"text-align: start;\"><span style=\"font-size: 13px;\">所获奖项</span></h3><h3 style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们在改进产品和坚持卓越服务方面的不懈努力，没有被同行忽视。我们很荣幸能够获得 “最可靠和最透明经纪商 2023 - 全球” 和 “最佳初学者服务经纪商 2023 - 亚洲” 等奖项。我们将继续努力发展壮大、扩张业务疆域，以更好地服务于我们的客户。</span></h3><p style=\"text-align: start;\"><br></p><h3 style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们的旅程</span></h3><p style=\"text-align: start;\"><span style=\"font-size: 13px;\">自成立以来，ST6一直致力于为客户提供最佳条件。我们不断改进自身的服务，并以我们的全球经验为基础，不断学习和提升...我们的成功得益于两项无价资产：创新技术和本地专业人才。</span></p><p style=\"text-align: start;\"><br></p><h3 style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们的目标</span></h3><p style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们竭诚打造业内最佳交易服务，以满足不断变化的客户需求。作为您的交易伙伴，我们将承担更多的责任，不断改善自身服务水平以满足您的各项需求。为您提供最好的交易条件和卓越的客户服务，是我们的基本原则。</span></p><p style=\"text-align: start;\"><span style=\"font-size: 13px;\">我们围绕客户构建整个业务模型。我们衡量成功的标准是您在 ST6平台上的交易体验满意度。</span></p><p style=\"text-align: start;\"><span style=\"font-size: 13px;\">请注意，您的交易、投资和个人信息都将受到我们最大限度的保护。</span></p><p><br></p>"
</script>

<style scoped lang="less">
.content {
  padding: 18px;
}
</style>
