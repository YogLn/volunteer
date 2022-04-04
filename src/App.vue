<template>
   <el-config-provider :locale="zhCn">
    <Header />
		<router-view />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import Header from '@/components/header/header.vue'

</script>

<style lang="less">
</style>
