<template>
   <el-config-provider :locale="zhCn">
		<Main />
  </el-config-provider>
</template>

<script setup>
import Main from './views/main'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="less">
</style>
