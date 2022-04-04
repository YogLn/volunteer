<template>
	<div class="container">
		<div class="top">
			<div class="top-center wrap-v2">
				<div class="left"></div>
				<div class="center">
					<el-input v-model="inputValue" size="large"/>
					<el-button type="primary" size="large">搜索</el-button>
				</div>
				<div class="right"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>

<style lang="less" scoped>
.container {
	.top {
		width: 100%;
		height: 110px;
		background: url("../../../assets/img/logobg.jpg") no-repeat;
		background-position-x: 50%;

		.top-center {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				width: 330px;
				height: 90px;
				background: url("../../../assets/img/qgzy2.png") no-repeat;
			}
			.center {
				width: 300px;
				display: flex;
				align-items: center;
			}
			.right {
				width: 130px;
				height: 110px;
				background: url("../../../assets/img/syslog.png") no-repeat;
			}
		}
	}
}
</style>