<template>
	<div class="container">
		<div class="image">
			<img v-if="content.logo" :src="content.logo" alt="">
			<img v-else src="../../../assets/img/noimg_opp.jpg" alt="">
		</div>
		<div class="name">{{ content.name }}</div>
		<div class="footer">
			<div>
				<div>开始时间</div>
				<div>{{ content.startDatetime }}</div>
			</div>
			<div>
				<div>招募人数</div>
				<div>{{ content.recruitNumber }}</div>
			</div>
			<div>
				<div>结束时间</div>
				<div>{{ content.endDatetime }}</div>
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
		height: 250px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.name {
		width: 100%;
		text-align: center;
		font-weight: bold;
		margin: 20px 0;
	}

	.footer {
		width: 100%;
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