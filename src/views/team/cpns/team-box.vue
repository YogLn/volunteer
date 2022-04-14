<template>
	<div class="container">
		<div class="image">
			<img v-if="content.logo" :src="content.logo" />
			<img v-else src="../../../assets/img/team.png" alt="">
		</div>
		<div class="name">{{ content.teamName }}</div>
		<div class="footer">
			<div>
				<div>培训满意度</div>
				<div>5.0</div>
			</div>
			<div>
				<div>合作满意度</div>
				<div>5.0</div>
			</div>
			<div>
				<div>计划符合度</div>
				<div>5.0</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
const { content } = defineProps({ content: { type: Object } })
</script>

<style lang="less" scoped>
.container {
	border: 1px solid #ccc;
	width: 230px;
	margin: 10px;
	cursor: pointer;

	&:hover {
		ackground: #fff;
		border: 1px solid #888;
		-webkit-box-shadow: #333 0px 0px 6px;
		-moz-box-shadow: #333 0px 0px 6px;
		box-shadow: #333 0px 0px 6px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
	}

	.image {
		width: 100%;

		img {
			width: 100%;
		}
	}

	.name {
		text-align: center;
		font-weight: bold;
		margin: 10px 0;
	}

	.footer {
		display: flex;
		padding: 5px 0;
		font-size: 12px;
		text-align: center;
		background-color: #F7F7F7;
	}

	.footer>div {
		width: 33%;
	}
}
</style>