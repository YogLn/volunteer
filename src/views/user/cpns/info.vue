<template>
	<div class="container">
		<div class="top" v-if="isShow">
			<span>注册志愿者</span>
			<div class="username">{{ myInfo.username }}</div>
		</div>
		<div class="content">
			<div class="info">
				<div class="avatar">
					<img src="../../../assets/img/noimg_avatar.jpg" alt="">
				</div>
				<div class="detail">
					<div class="area">区域：{{ myInfo?.serveArea?.join(' ') }}</div>
					<div class="account">账户：{{ myInfo?.account }}</div>
					<div class="identity">身份证：{{ myInfo?.identity }}</div>
					<div class="school">学校：{{ myInfo?.school }}</div>
					<div class="created">生日：{{ formatUtcString(myInfo?.birthday, 'YYYY-MM-DD') }}</div>
					<div class="evaluate">服务评价： 守时程度：5.0 服务态度：5.0 专业水平：5.0 </div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
import { defineProps, ref, toRefs } from 'vue'
import { formatUtcString } from '@/utils/format'
const activeName = ref('first')

const { myInfo } = defineProps({ myInfo: Object, isShow: { type: Boolean, default: true } })
</script>

<style lang="less" scoped>
.container {
	.top {
		display: flex;
		padding: 10px;
		border: 1px solid #ccc;
		margin-top: 10px;

		span {
			display: inline-block;
			background: #c30;
			padding: 5px;
			font-size: 12px;
			color: #fff;
			margin-right: 10px;
			border-radius: 5px;
		}
	}

	.content {
		border: 1px solid #ccc;
		margin-top: 20px;

		.info {
			display: flex;
			align-items: center;

			.avatar {
				margin-right: 15px;
			}

			.detail {
				.evaluate {
					color: #666;
				}

				div {
					margin: 8px 0;
				}
			}
		}

		.tabs {
			margin: 20px;
		}
	}
}
</style>