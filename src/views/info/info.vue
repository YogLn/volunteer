<template>
	<div class="container">
		<moment-list :list="infoList" />
	</div>
</template>

<script setup >
import MomentList from '../moment/cpns/list'
import { infoList } from '@/local-data/info'
</script>

<style lang="less" scoped>
</style>