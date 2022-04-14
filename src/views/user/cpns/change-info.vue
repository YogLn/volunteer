<template>
	<div class="container">
		<el-form :model="userInfoForm" label-width="7.5rem" ref="userInfoFormRef" :rules="rules">
			<el-form-item label="手机号" prop="account">
				<el-input v-model="userInfoForm.account" disabled />
			</el-form-item>
			<el-form-item label="用户名" prop="username">
				<el-input v-model="userInfoForm.username" />
			</el-form-item>
			<el-form-item label="身份证" prop="identity">
				<el-input v-model="userInfoForm.identity" />
			</el-form-item>
			<el-form-item label="性别" prop="sex">
				<el-radio-group v-model="userInfoForm.sex">
					<el-radio :label="1">男</el-radio>
					<el-radio :label="0">女</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="生日" prop="birthday">
				<el-date-picker v-model="userInfoForm.birthday" type="date" placeholder="选择生日" />
			</el-form-item>
			<el-form-item label="服务区域" prop="serveArea">
				<el-cascader :options="provinces" v-model="userInfoForm.serveArea" clearable />
			</el-form-item>
			<el-form-item label="服务类型" prop="serveType">
				<el-checkbox-group v-model="userInfoForm.serveType" v-for="item in serveType">
					<el-checkbox :label="item" />
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="学校" prop="school">
				<el-input v-model="userInfoForm.school" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="handleUpdate(userInfoFormRef)">修 改</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from "vuex";
import { ElMessage } from 'element-plus';
import { serveType, rules } from '@/local-data/user-register';
import { formatUtcString } from '@/utils/format';
import { provinces } from '@/local-data/provinces';
import { updateInfoRequest } from '@/services/user'

const store = useStore();
const userInfoFormRef = ref(null)

const { id } = JSON.parse(window.localStorage.getItem('userInfo'))
id && store.dispatch('user/getMyInfoAction', id)

const userInfoForm = computed(() => store?.state?.user?.myInfo)
const handleUpdate = async (formEl) => {
	if (!formEl) return
	await formEl.validate(async (valid, fields) => {
		if (valid) {
			userInfoForm.value.birthday = formatUtcString(userInfoForm.value.birthday)
			const res = await updateInfoRequest(userInfoForm.value)
			if (res.code == 200) {
				ElMessage({
					message: '修改成功~',
					type: 'success'
				})
			}
		} else {
			console.log('error submit!', fields)
		}
	})
}
</script>

<style lang="less" scoped>
.container {
	.el-form {
		width: 60%;
		margin: 1.875rem auto;

		.el-checkbox {
			margin: 0 10px;
		}
	}
}
</style>