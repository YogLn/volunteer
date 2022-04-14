<template>
	<div class="container">
		<el-card>
			<h2>志愿团队注册</h2>
			<hr />
			<el-form :model="teamRegisterForm" label-width="7.5rem" ref="teamRegisterFormRef" :rules="rules">
				<el-form-item label="团队名称" prop="teamName">
					<el-input v-model="teamRegisterForm.teamName" />
				</el-form-item>
				<el-form-item label="负责人手机号" prop="account">
					<el-input v-model="teamRegisterForm.account" />
				</el-form-item>
				<el-form-item label="队伍所在区域" prop="serveArea">
					<el-cascader :options="provinces" v-model="teamRegisterForm.serveArea" clearable />
				</el-form-item>
				<el-form-item label="服务类型" prop="serveType">
					<el-checkbox-group v-model="teamRegisterForm.serveType" v-for="item in serveType">
						<el-checkbox :label="item" />
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="团队封面" prop="logo">
					<my-upload @imgUrl="handleImgUrl" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm(teamRegisterFormRef)">注 册</el-button>
					<el-button @click="resetForm(teamRegisterFormRef)">重 置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'
import { provinces } from '@/local-data/provinces';
import { serveType } from '@/local-data/user-register';
import { checkMobile } from '@/utils/validate';
import { teamRegisterRequest } from '@/services/register'
import MyUpload from '@/components/upload/Upload.vue'

const teamRegisterFormRef = ref(null)
const teamRegisterForm = reactive({
	teamName: '',
	account: '',
	serveArea: [],
	serveType: [],
	logo: ''
})

const rules = reactive({
	teamName: [{ required: true, message: '请输入团队名称~', trigger: 'blur' }],
	serveArea: [{ required: true, message: '请选择服务区域~', trigger: 'blur' }],
	serveType: [{ required: true, message: '请选择服务类型~', trigger: 'blur' }],
	account: [
		{ required: true, message: '请输入手机号~', trigger: 'blur' },
		{ validator: checkMobile, trigger: 'blur' }
	],
})

const handleImgUrl = (url) => {
	teamRegisterForm.logo = url
}

const submitForm = async (formEl) => {
	if (!formEl) return
	await formEl.validate(async (valid, fields) => {
		if (valid) {
			const res = await teamRegisterRequest(teamRegisterForm)
			if (res.code === 200) {
				ElMessage({
					message: '注册成功~',
					type: 'success'
				})
				teamRegisterFormRef.value.resetFields()
			}
		} else {
			console.log('error submit!', fields)
		}
	})
}

// 重置
const resetForm = (formEl) => {
	if (!formEl) return
	teamRegisterFormRef.value.resetFields()
}

</script>

<style lang="less" scoped>
.container {
	background-color: #f5f5f5;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;

	.el-card {

		// width: 50%;
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