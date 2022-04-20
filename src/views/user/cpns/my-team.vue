<template>
	<div class="container">
		<el-tabs v-model="activeName">
			<el-tab-pane label="我加入的团体" name="first">
				<div v-if="!myTeam.length">您还没有加入团体~</div>
				<my-table v-else :listData="myTeam" :="TeamTableContentConfig" :isShow="false">
					<template #serveArea="scope">
						{{ scope.row.serveArea.join(' ') }}
					</template>
					<template #handler="scope">
						<el-popconfirm title="确认退出吗?" @confirm="handleDeleteClick(scope.row)">
							<template #reference>
								<el-button size="small" type="danger">退 出</el-button>
							</template>
						</el-popconfirm>
					</template>
				</my-table>
			</el-tab-pane>
			<el-tab-pane label="我创建的团体" name="second">
				<div v-if="!myCreate.length">您还没有创建团体~</div>
				<my-table v-else :listData="myCreate" :="TeamTableContentConfig" :isShow="false">
					<template #account="scope">
						{{ account }}
					</template>
					<template #serveArea="scope">
						{{ scope.row.serveArea.join(' ') }}
					</template>
					<template #handler="scope">
						<el-popconfirm title="确认退出吗?" @confirm="handleDisbandClick(scope.row)">
							<template #reference>
								<el-button size="small" type="danger">解 散</el-button>
							</template>
						</el-popconfirm>
					</template>
				</my-table>
			</el-tab-pane>
		</el-tabs>

	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from "vuex"
import { ElMessage } from 'element-plus'

import { outTeamReq, disbandReq } from '@/services/user'
import MyTable from '@/components/table/MyTable.vue'
import { TeamTableContentConfig } from '../config/user.config'

const route = useRoute()
const store = useStore()

store.dispatch('user/getMyTeamListAction')
store.dispatch('user/getMyTeamAction')

const activeName = ref('first')
const myTeam = computed(() => store.state.user.myTeam)
const myCreate = computed(() => store.state.user.myCreate)
const { account } = computed(() => store.state.login.userInfo).value

const handleDeleteClick = async ({ teamId }) => {
	const res = await outTeamReq(teamId)
	if (res.code === 200) {
		ElMessage.success('退出成功~')
		store.dispatch('user/getMyTeamListAction')
	}
}
const handleDisbandClick = async ({ teamId }) => {
	const res = await disbandReq(teamId)
	if (res.code === 200) {
		ElMessage.success('退出成功~')
		store.dispatch('user/getMyTeamAction')
	}
}
</script>

<style lang="less" scoped>
</style>

