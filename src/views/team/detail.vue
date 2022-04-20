<template>
	<div class="container">
		<div class="image">
			<img v-if="currentTeam.logo" :src="currentTeam.logo" />
			<img v-else src="../../assets/img/team.png" alt="">
		</div>
		<div class="info-team">
			<div class="name">团队名称：<span>{{ currentTeam.teamName }}</span></div>
			<div class="serveArea">服务地区： <span>{{ currentTeam?.serveArea?.join(' ') }}</span></div>
			<div class="serveType">服务类型：<span>{{ currentTeam?.serveType?.join(', ') }}</span></div>
			<div class="serveType">加入方式：<span>验证信息加入（需审核申请）</span></div>
			<div class="username">团队联系人：<span>{{ currentTeam?.userVo?.username }}</span></div>
			<div class="username">团队人数：<span>{{ teamNum }}</span> 人</div>
			<div class="account">联系电话：<span>{{ currentTeam?.userVo?.account }}</span></div>
			<div class="area">创建时间：<span>{{
				currentTeam.communityCreatedate ?
					$filter.formatTime(currentTeam.communityCreatedate) : ''
			}}</span></div>

			<el-button type="primary" class="btn-join" @click="handleJoin()">我要加入</el-button>
			<report />
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from "vuex"
import { ElNotification, ElMessage } from 'element-plus'
import { joinTeamReq, getTeamMemberNumReq } from '@/services/team'
import Report from '@/components/report/report.vue'

const route = useRoute()
const store = useStore()

const teamNum = ref(0)
const { id: teamId } = route.params
store.dispatch('team/getTeamDetailAction', teamId)

const currentTeam = computed(() => store.state.team.currentTeam)
const { id: userId } = computed(() => store.state.login.userInfo).value

const handleJoin = async () => {
	const token = window.localStorage.getItem('token')
	if (!token) {
		return ElMessage({
			message: '您还没有登录~',
			type: 'info'
		})
	}
	const res = await joinTeamReq({ userId, teamId: parseInt(teamId) })
	if (res.code === 200) {
		ElNotification({
			title: '已发送请求',
			message: '请等待负责人审核~',
			type: 'success',
		})
	} else {
		ElNotification({
			title: '重复报名',
			message: '您已经报名过了~',
			type: 'info',
		})
	}
}

const getTeamMemberNum = async () => {
	const { data } = await getTeamMemberNumReq(teamId)
	teamNum.value = data
}
getTeamMemberNum()
</script>

<style lang="less" scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: space-around;
	border: 1px solid #ccc;
	margin-top: 10px;


	.image {
		width: 300px;
		height: 370px;
		padding: 20px 0;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.info-team {
		div {
			margin: 12px 15px;
			font-size: 14px;
			font-weight: bold;

			span {
				font-size: 15px;
				font-weight: normal;
			}
		}

		.btn-join {
			margin: 20px;
		}

		.username {
			span {
				color: #139208;
			}
		}
	}
}
</style>