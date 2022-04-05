<template>
	<div class="container">
		<el-card>
			<h2>志愿团队注册</h2>
			<hr />
			<el-form :model="teamRegisterForm" label-width="7.5rem" ref="teamRegisterFormRef" :rules="rules">
				<el-form-item label="团队名称" prop="teamName">
					<el-input v-model="teamRegisterForm.teamName" />
				</el-form-item>
				<el-form-item label="队伍所在区域" prop="communityAddress">
					<el-cascader :options="provinces" v-model="teamRegisterForm.communityAddress" clearable />
				</el-form-item>
				<el-form-item label="服务类型" prop="serveType">
					<el-checkbox-group v-model="teamRegisterForm.serveType" v-for="item in serveType">
						<el-checkbox :label="item" />
					</el-checkbox-group>
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
import { provinces } from '@/local-data/provinces';
import { serveType } from '@/local-data/user-register';

const teamRegisterFormRef = ref(null)
const teamRegisterForm = reactive({
	teamName: '',
	communityAddress: [],
	serveType: [],
})

const rules = reactive({
	teamName: [{ required: true, message: '请输入团队名称~', trigger: 'blur' }],
	communityAddress: [{ required: true, message: '请选择服务区域~', trigger: 'blur' }],
	serveType: [{ required: true, message: '请选择服务类型~', trigger: 'blur' }]
})

const submitForm = async (formEl) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log(teamRegisterForm);
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
	.el-card {
		width: 50%;
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