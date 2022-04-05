<template>
	<div class="container">
		<div class="wrapper wrap-v2">
			<div class="left">
				<span  @click="router.push('/login')">亲，请登录</span>
				<span @click="router.push('/user/register')">志愿者注册</span>
				<i>/</i>
				<span @click="router.push('/team/register')">志愿团体注册</span>
			</div>
			<div class="right">
				<span>发起项目</span>
				<span>
					<el-dropdown>
						<span class="el-dropdown-link">
							志愿中心
							<el-icon class="el-icon--right">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>我的项目</el-dropdown-item>
								<el-dropdown-item>我的时长</el-dropdown-item>
								<el-dropdown-item>我的团体</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import router from '@/router';
</script>

<style lang="less" scoped>
.container {
	background-color: #f5f5f5;
	height: 32px;
	.wrapper {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		line-height: 32px;
		.left {
			span:nth-child(1) {
				color: #f00000;
			}
			span {
				margin: 0 5px;
				cursor: pointer;
				&:hover {
					color: #f00000;
				}
			}
		}
		.right {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 15%;
			span {
				cursor: pointer;
				&:hover {
					color: #f00000;
				}
			}
			.el-dropdown {
				height: 32px;
				line-height: 32px;
				font-size: 12px;
				&:hover {
					color: #f00000;
				}
				.el-tooltip__trigger {
					font-size: 12px;
				}
			}
		}
	}
}
</style>