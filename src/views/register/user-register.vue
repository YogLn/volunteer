<template>
	<div class="container">
		<el-card>
			<h2>用户注册</h2>
			<hr />
			<el-form :model="useRegisterForm" label-width="7.5rem" ref="useRegisterFormRef" :rules="rules">
				<el-form-item label="手机号" prop="account">
					<el-input v-model="useRegisterForm.account" />
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model="useRegisterForm.password" />
				</el-form-item>
				<el-form-item label="用户名" prop="username">
					<el-input v-model="useRegisterForm.username" />
				</el-form-item>
				<el-form-item label="身份证" prop="identity">
					<el-input v-model="useRegisterForm.identity" />
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-radio-group v-model="useRegisterForm.sex">
						<el-radio :label="1">男</el-radio>
						<el-radio :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="生日" prop="birthday">
					<el-date-picker v-model="useRegisterForm.birthday" type="date" placeholder="选择生日" />
				</el-form-item>
				<el-form-item label="服务区域" prop="serve_area">
					<el-cascader :options="provinces" v-model="useRegisterForm.serve_area" clearable />
				</el-form-item>
				<el-form-item label="服务类型" prop="serve_type">
					<el-checkbox-group v-model="useRegisterForm.serve_type" v-for="item in serveType">
						<el-checkbox :label="item" />
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="学校" prop="school">
					<el-input v-model="useRegisterForm.school" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm(useRegisterFormRef)">注 册</el-button>
					<el-button @click="resetForm(useRegisterFormRef)">重 置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { checkMobile, checkIdentity } from '@/utils/validate';
import { provinces } from '@/local-data/provinces';
import { serveType } from '@/local-data/user-register';
const useRegisterFormRef = ref(null)
const useRegisterForm = reactive({
	username: '',
	account: '',
	password: '',
	identity: '',
	sex: '',
	birthday: '',
	serve_area: '',
	serve_type: [],
	school: ''
})

const rules = reactive({
	username: [{ required: true, message: '请输入用户名~', trigger: 'blur' }],
	account: [
		{ required: true, message: '请输入手机号~', trigger: 'blur' },
		{ validator: checkMobile, trigger: 'blur' }
	],
	password: [
		{ required: true, message: '请输入密码~', trigger: 'blur' },
		{ min: 6, message: '密码不得少于6位', trigger: 'blur' }
	],
	serve_area: [{ required: true, message: '请选择服务区域~', trigger: 'blur' }],
	identity: [{ required: true, message: '请输入合法身份证号~', trigger: 'blur' },
	{ validator: checkIdentity, trigger: 'blur' }],
	serve_type: [{ required: true, message: '请选择服务类型~', trigger: 'blur' }]
})

// 提交
const submitForm = async (formEl) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log(useRegisterForm);
		} else {
			console.log('error submit!', fields)
		}
	})
}

// 重置
const resetForm = (formEl) => {
	if (!formEl) return
	useRegisterFormRef.value.resetFields()
}
</script>

<style lang="less" scoped>
.container {
	padding: 0.625rem 18.75rem;
	height: 100%;
	background-color: #f5f5f5;
	.el-card {
		height: 100%;
		h2 {
			text-align: center;
		}
		.el-form {
			width: 60%;
			margin: 1.875rem auto;

			.el-checkbox {
				margin: 0 10px;
			}
		}
	}
}
</style>