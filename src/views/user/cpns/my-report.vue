<template>
	<div class="container">
		<my-table :listData="myReport" :="reportTableContentConfig" :isShow="false">
			<template #createDate="scope">
				{{ $filter.formatTime(scope.row.createDate) }}
			</template>
			<template #reportStatus="scope">
				<template v-if="scope.row.reportStatus === 0">
					<el-tag type="warning">审核中</el-tag>
				</template>
				<template v-else-if="scope.row.reportStatus === 1">
					<el-tag type="success">举报成功</el-tag>
				</template>
				<template v-else>
					<el-tag type="danger">举报失败</el-tag>
				</template>
			</template>
			<template #handler="scope">
				<el-popconfirm title="确认退出吗?" @confirm="handleRevokeClick(scope.row)">
					<template #reference>
						<el-button size="small" type="danger">撤销举报</el-button>
					</template>
				</el-popconfirm>
			</template>
		</my-table>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from "vuex"

import MyTable from '@/components/table/MyTable.vue'
import { reportTableContentConfig } from '../config/user.config'
import { deleteReportReq } from '@/services/report'
import { ElMessage } from 'element-plus';
const store = useStore()

store.dispatch('user/getMyReportListAction')

const myReport = computed(() => store.state.user.myReport)
const handleRevokeClick = async ({ id }) => {
	const { code } = await deleteReportReq(id)
	if (code === 200) {
		ElMessage.success('已撤销举报~')
		store.dispatch('user/getMyReportListAction')
	}
}
</script>

<style lang="less" scoped>
</style>