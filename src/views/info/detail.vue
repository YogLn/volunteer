<template>
	<div class="container">
		<h2>{{ currentMoment.title }}</h2>
		<div class="info">
			<div class="time">日期：{{ $filter.formatTime(currentMoment.createDate) }}</div>
			<div class="sources">来源：{{ currentMoment.source }}</div>

		</div>
		<div class="content" v-for="item in content">
			<p>{{ item }}</p>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { infoList } from '@/local-data/info'

const route = useRoute()

const { id } = route.params
const currentMoment = infoList[id]
const content = infoList[id]?.content?.split('\n')
</script>

<style lang="less" scoped>
.container {
	border: 1px solid #ccc;
	margin-top: 10px;
	padding: 20px;

	h2 {
		text-align: center;
	}

	.info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 20px 0;
	}

	.info+.content {
		text-indent: 2em;
	}

	.content {
		font-family: 宋体;
		font-size: 14px;
		text-align: left;
		line-height: 32px;
		margin: 10px 10px 10px 20px;
		color: #333;
	}
}
</style>