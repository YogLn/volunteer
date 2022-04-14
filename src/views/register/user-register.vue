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
					<el-input v-model="useRegisterForm.password" type="password" show-password />
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
				<el-form-item label="服务区域" prop="serveArea">
					<el-cascader :options="provinces" v-model="useRegisterForm.serveArea" clearable />
				</el-form-item>
				<el-form-item label="服务类型" prop="serveType">
					<el-checkbox-group v-model="useRegisterForm.serveType" v-for="item in serveType">
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
import { ElMessage } from 'element-plus'
import { formatUtcString } from '@/utils/format';
import { provinces } from '@/local-data/provinces';
import { serveType, rules } from '@/local-data/user-register';
import { userRegisterRequest } from '@/services/register'

const useRegisterFormRef = ref(null)
const useRegisterForm = reactive({
	username: '',
	account: '',
	password: '',
	identity: '',
	sex: '',
	birthday: '',
	serveArea: [],
	serveType: [],
	school: ''
})



// 提交
const submitForm = async (formEl) => {
	if (!formEl) return
	await formEl.validate(async (valid, fields) => {
		if (valid) {
			useRegisterForm.birthday = formatUtcString(useRegisterForm.birthday)
			const res = await userRegisterRequest(useRegisterForm)
			if (res.code == 200) {
				ElMessage({
					message: '注册成功~',
					type: 'success'
				})
				useRegisterFormRef.value.resetFields()
			}
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
	margin-top: 10px;

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