<template>
	<div class="container wrap-v2">
		<div class="ms-login">
			<div class="ms-title">登录志愿系统</div>
			<el-form :model="loginForm" :rules="rules" ref="login" label-width="0px" class="ms-content">
				<el-form-item prop="account">
					<el-input v-model="loginForm.account" placeholder="手机号">
						<template #prepend>
							<el-icon>
								<user />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter="submitForm()">
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
			<div class="tip" @click="router.push('/user/register')">没有账号？立即注册 成为志愿者</div>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from "vuex";
import { checkMobile } from '@/utils/validate';
import router from '@/router';
import { User, Lock } from '@element-plus/icons-vue'

const store = useStore();

const loginForm = reactive({
	account: '19113121546',
	password: '123456'
})
const rules = {
	account: [
		{ required: true, message: '请输入正确的手机号~', trigger: 'blur' },
		{ validator: checkMobile, trigger: 'blur' }
	],
	password: [
		{ required: true, message: "请输入密码", trigger: "blur" },
	],
};
const submitForm = () => {
	store.dispatch('login/loginAction', loginForm)

}
</script>

<style lang="less" scoped>
.container {
	position: relative;
	margin-top: 10px;
	height: 400px;
	width: 100%;
	background: url("../../assets/img/login.jpg") no-repeat;

	.ms-login {
		position: absolute;
		left: 25%;
		top: 50%;
		width: 350px;
		margin: -150px 0 0 -175px;
		border-radius: 5px;
		background: #fff;
		opacity: 0.8;
		overflow: hidden;
		border: 1px solid #ccc;

		.tip {
			text-align: center;
			margin: 0 0 15px 0;
			color: #3471eb;
			font-size: 13px;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
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