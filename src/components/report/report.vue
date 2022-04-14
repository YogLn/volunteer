<template>
	<el-button type="warning" @click="dialogVisible = true">举报</el-button>
	<el-dialog v-model="dialogVisible" title="举报内容" width="40%">
		<el-input v-model="content" :rows="4" type="textarea" placeholder="请输入举报原因" />
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="handleSubmit()">提 交</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { addReportReq } from '@/services/report'
import { ElMessage } from 'element-plus';

const store = useStore()

let dialogVisible = ref(false)
let content = ref('')
const { id: userId } = computed(() => store.state.login.userInfo).value

const handleSubmit = async () => {
	const res = await addReportReq({
		content: content.value,
		userId
	})
	if (res.code === 200) {
		ElMessage.success('提交成功~')
		dialogVisible.value = false
		content.value = ''
	}
}
</script>

<style lang="less" scoped>
</style>