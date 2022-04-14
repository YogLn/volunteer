<template>
	<div class="container">
		<my-table :listData="myProjectList" :="tableContentConfig" :isShow="false">
			<template #type="scope">
				{{ scope.row.type.join(',') }}
			</template>
			<template #status="scope">
				<template v-if="scope.row.status === 0">
					<el-tag type="warning">审批中</el-tag>
				</template>
				<template v-else-if="scope.row.status === 1">
					<el-tag type="success">通过</el-tag>
				</template>
				<template v-else>
					<el-tag type="danger">不通过</el-tag>
				</template>
			</template>
			<template #handler="scope">
				<el-button size="small" type="info" @click="handleDetailClick(scope.row)">详情</el-button>
				<el-popconfirm title="确认退出吗?" @confirm="handleDeleteClick(scope.row)">
					<template #reference>
						<el-button size="small" type="danger">退出</el-button>
					</template>
				</el-popconfirm>
			</template>
		</my-table>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from "vuex"
import { ElMessage } from 'element-plus'

import { outActivityReq } from '@/services/user'
import { tableContentConfig } from '../config/user.config'
import MyTable from '@/components/table/MyTable.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

store.dispatch('user/getMyActivityListAction')
const myProjectList = computed(() => store.state.user.myActivity)

const handleDeleteClick = async ({ id }) => {
	const res = await outActivityReq(id)
	if (res.code === 200) {
		ElMessage.success('退出成功~')
		store.dispatch('user/getMyActivityListAction')
	}
}

const handleDetailClick = ({ id }) => {
	router.push(`/project/${id}`)
}
</script>

<style lang="less" scoped>
.container {
	width: 100%;
}
</style>