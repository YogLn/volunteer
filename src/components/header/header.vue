<template>
	<div class="container">
		<div class="wrapper wrap-v2">
			<template v-if="usernameRef">
				<div class="login-info">
					<span>您好！<span class="username" @click="handleUser()">
							<el-tooltip class="box-item" content="个人中心" placement="bottom">
								{{ usernameRef }}
							</el-tooltip>
						</span></span>
					<span class="login-out" @click="handleLoginOut">退出</span>
				</div>
			</template>
			<template v-else>
				<div class="left">
					<span @click="handleLogin('/login')">亲，请登录</span>
					<span @click="handleLogin('/register/user')">志愿者注册</span>
					<i>/</i>
					<span @click="handleLogin('/register/team')">志愿团体注册</span>
				</div>
			</template>
			<div class="right">
				<span v-if="usernameRef" @click="handleLogin('/newActivity')">发起项目</span>
				<span>
					<el-dropdown>
						<span class="el-dropdown-link">
							志愿中心
							<el-icon class="el-icon--right">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu class="el-dropdown-menu">
								<el-dropdown-item @click="handleMyPage('/user/myProject')">我的项目</el-dropdown-item>
								<el-dropdown-item @click="handleMyPage('/user/myTime')">我的时长</el-dropdown-item>
								<el-dropdown-item @click="handleMyPage('/user/myTeam')">我的团体</el-dropdown-item>
								<el-dropdown-item @click="handleMyPage('/my')">我的主页</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { ElMessage } from 'element-plus'
import { useStore } from "vuex";
import { ArrowDown } from '@element-plus/icons-vue'
import router from '@/router';
import emitter from '@/utils/eventBus'

const store = useStore()
const usernameRef = ref(true)



watchEffect(() => {
	usernameRef.value = store?.state?.login?.userInfo?.username
})
// 登录
const handleLogin = (path) => {
	setTimeout(() => router.push(path))
	emitter.emit('changeIndex', -1)
}
// 退出
const handleLoginOut = () => {
	window.localStorage.clear()
	usernameRef.value = null
	router.push('/home')
}
// 页面跳转
const handleUser = () => {
	router.push('/user')
	emitter.emit('changeIndex', -1)
}

// 校验登录
const verifyLogin = () => {
	const token = window.localStorage.getItem('token')
	if (!token) {
		ElMessage({
			message: '您还没有登录~',
			type: 'info'
		})
		return false
	}
	return true
}
// 进入个人中心页面
const handleMyPage = (path) => {
	if (verifyLogin()) router.push(path)
	emitter.emit('changeIndex', -1)
}

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

		.login-info {
			span {
				margin: 0 5px;
			}

			.username {
				color: #ff0000;
				font-size: 13px;
				cursor: pointer
			}

			.login-out {
				cursor: pointer;

				&:hover {
					color: #ff0000;
				}
			}
		}

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

.el-dropdown-menu {
	/deep/ .el-dropdown-menu__item {
		font-size: 12px;
	}
}
</style>