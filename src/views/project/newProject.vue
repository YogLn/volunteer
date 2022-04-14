<template>
	<div class="container">
		<el-form :model="newProject" label-width="10rem" ref="projectRef" :rules="rules">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="newProject.name" />
			</el-form-item>
			<el-form-item label="活动地点" prop="address">
				<el-input v-model="newProject.address" />
			</el-form-item>
			<el-form-item label="活动简介" prop="desc">
				<el-input v-model="newProject.desc" />
			</el-form-item>
			<el-form-item label="活动开始时间" prop="startDatetime">
				<el-date-picker v-model="newProject.startDatetime" type="date" />
			</el-form-item>
			<el-form-item label="活动结束时间" prop="endDatetime">
				<el-date-picker v-model="newProject.endDatetime" type="date" />
			</el-form-item>
			<el-form-item label="活动时长" prop="length">
				<el-input v-model="newProject.length" placeholder="小时" />
			</el-form-item>
			<el-form-item label="招募人数" prop="recruitNumber">
				<el-input v-model="newProject.recruitNumber" />
			</el-form-item>
			<el-form-item label="招募状态" prop="recruitStatus">
				<el-radio v-model="newProject.recruitStatus" label="-1" size="large">未开始</el-radio>
				<el-radio v-model="newProject.recruitStatus" label="0" size="large">进行中</el-radio>
				<el-radio v-model="newProject.recruitStatus" label="1" size="large">已结束</el-radio>
			</el-form-item>
			<el-form-item label="活动团队" prop="teamId">
				<template v-for="item in teamList">
					<el-radio v-model="newProject.teamId" :label="item.teamId" size="large">{{ item.teamName }}</el-radio>
				</template>
			</el-form-item>
			<el-form-item label="活动封面" prop="logo">
				<my-upload @imgUrl="handleImgUrl" />
			</el-form-item>
			<el-form-item label="活动类型" prop="type">
				<el-checkbox-group v-model="newProject.type" v-for="item in serveType">
					<el-checkbox :label="item" />
				</el-checkbox-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm(projectRef)">注 册</el-button>
				<el-button @click="resetForm()">重 置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { formatUtcString } from '@/utils/format';
import { serveType } from '@/local-data/user-register';
import { rules } from '@/local-data/project'
import { addActivityReq } from '@/services/project';
import MyUpload from '@/components/upload/Upload.vue'

const store = useStore()

const projectRef = ref(null)
const { teamList } = store.state.login.userInfo
const newProject = reactive({
	name: '',
	address: '',
	desc: '',
	startDatetime: '',
	endDatetime: '',
	length: '',
	recruitNumber: '',
	recruitStatus: '',
	teamId: '',
	type: [],
	logo: ''
})

const submitForm = async (formEl) => {
	if (!formEl) return
	await formEl.validate(async (valid, fields) => {
		if (valid) {
			newProject.startDatetime = formatUtcString(newProject.startDatetime, 'YYYY-MM-DD')
			newProject.endDatetime = formatUtcString(newProject.endDatetime, 'YYYY-MM-DD')
			const res = await addActivityReq(newProject)
			if (res.code === 200) {
				ElMessage.success('发布成功~')
				resetForm()
			}
		} else {
			console.log('error submit!', fields)
		}
	})
}

const handleImgUrl = (url) => {
	newProject.logo = url
}

const resetForm = () => {
	projectRef.value.resetFields()
}

</script>

<style lang="less" scoped>
.container {
	padding: 30px 50px;
	margin-top: 10px;
	border: 1px solid #ccc;

	.el-checkbox {
		margin: 0 10px;
	}
}
</style>