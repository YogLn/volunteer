<template>
	<div class="container">
		<div class="user-list" v-for="item, index in list">
			<div class="title" @click="handleMomentClick(item, index)">
				<el-icon>
					<notebook />
				</el-icon>{{ item.title }}
			</div>
			<div class="time">{{ $filter.formatTime(item.createDate) }}</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
import { Notebook } from '@element-plus/icons-vue';

const router = useRouter()

const { list } = defineProps({ list: { type: Array, default: [] } })
const handleMomentClick = ({ id }, index) => {
	if (id) {
		// 志愿风采
		router.push(`/moment/${id}`)
	} else {
		// 信息动态
		router.push(`/info/${index}`)
	}
}
</script>

<style lang="less" scoped>
.container {
	.user-list {
		display: flex;
		justify-content: space-between;
		margin: .625rem .3125rem;
		color: #666;

		.title {
			cursor: pointer;

			&:hover {
				color: #000;
			}

			.el-icon {
				position: relative;
				top: .125rem;
			}
		}
	}
}
</style>