<template>
	<div class="container wrap-v2">
		<div class="ms-login">
			<div class="ms-title">登录志愿系统</div>
			<el-form :model="loginForm" :rules="rules" ref="login" label-width="0px" class="ms-content">
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" placeholder="用户名">
						<template #prepend>
							<el-icon>
								<user />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						type="password"
						placeholder="密码"
						v-model="loginForm.password"
						@keyup.enter="submitForm()"
					>
						<template #prepend>
							<el-icon>
								<lock />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button type="primary" @click="submitForm()">登录</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import { User, Lock } from '@element-plus/icons-vue'
const loginForm = reactive({
	username: '',
	password: ''
})
const rules = {
	username: [
		{
			required: true,
			message: "请输入用户名",
			trigger: "blur",
		},
	],
	password: [
		{ required: true, message: "请输入密码", trigger: "blur" },
	],
};
const submitForm = () => {
	console.log(loginForm);
}
</script>

<style lang="less" scoped>
.container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: url("../../assets/img/login.jpg") no-repeat;
	height: 400px;

	.ms-login {
		position: absolute;
		left: 20%;
		top: 50%;
		width: 350px;
		margin: -150px 0 0 -175px;
		border-radius: 5px;
		background: #fff;
		overflow: hidden;
		border: 1px solid #ccc;
	}
	.ms-title {
		width: 100%;
		letter-spacing: 3px;
		line-height: 50px;
		text-align: center;
		font-size: 22px;
		color: #000;
		border-bottom: 1px solid #666;
	}

	.ms-content {
		padding: 30px 30px;
	}
	.login-btn {
		text-align: center;
	}
	.login-btn button {
		width: 100%;
		height: 36px;
		margin-bottom: 10px;
	}
	.login-tips {
		font-size: 12px;
		line-height: 30px;
		color: #fff;
	}
}
</style>