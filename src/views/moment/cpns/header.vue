<template>
	<div class="container">
		<div class="header">{{ title }}</div>
		<div class="more">更多></div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
const { title } = defineProps(['title'])
</script>

<style lang="less" scoped>
.container {
	display: flex;
	justify-content: space-between;

	padding: 10px 5px 5px;
	border-bottom: 5px solid #D6E8F6;

	.header {
		padding: 2px 4px;
		background-color: #D6E8F6;
		cursor: pointer;
	}

	.more {
		cursor: pointer;

		&:hover {
			color: #ff0000;
		}
	}
}
</style>