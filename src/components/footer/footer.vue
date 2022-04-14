<template>
	<div class="container">
		<div class="center">
			<div>ICP备案编号：<a href="https://beian.miit.gov.cn/">京ICP备13002525号-7</a> 版权所有：志愿四川</div>
			<div>使用指南 使用指南 联系我们 技术支持：志愿云系统 志愿云技术</div>
			<div>为了达到最好效果，推荐使用 Microsoft Edge或 Mozilla Firefox浏览器</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	height: 130px;
	width: 100%;
	background-color: #aaaaaa;

	.center {
		div {
			text-align: center;
			color: #fff;
			font-size: 12px;
			margin: 10px;
			letter-spacing: 2px;

			a {
				cursor: pointer;
			}
		}
	}
}
</style>