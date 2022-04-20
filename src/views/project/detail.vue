<template>
	<div class="container">
		<div class="header">{{ currentProject?.name }}</div>
		<div class="center">
			<div class="image">
				<img v-if="currentProject.logo" :src="currentProject.logo" alt="">
				<img v-else src="../../assets/img/noimg_opp.jpg" alt="">
			</div>
			<div class="info">
				<div class="address">项目地点：<span>{{ currentProject?.address }}</span></div>
				<div class="address">项目描述：<span>{{ currentProject?.desc }}</span></div>
				<div class="time">开始时间：<span>{{ currentProject?.startDatetime }}</span></div>
				<div class="time">结束时间：<span>{{ currentProject?.endDatetime }}</span></div>
				<div class="time">发布日期：<span>{{ currentProject?.createDate }}</span></div>
				<div class="address">持续时间：<span>{{ currentProject?.length }}天</span></div>
				<div class="address">服务类别：<span>{{ currentProject?.type?.join(', ') }}</span></div>
				<div class="address">活动状态：
					<template v-if="currentProject.status === 0">
						<el-tag type="warning">审核中</el-tag>
					</template>
					<template v-else-if="currentProject.status === 1">
						<el-tag type="success">通过</el-tag>
					</template>
					<template v-else>
						<el-tag type="danger">未通过</el-tag>
					</template>
				</div>
				<div class="btn">
					<el-button type="primary" @click="handleJoin()">我要报名</el-button>
					<report />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex"
import { ElNotification, ElMessage } from 'element-plus'
import Report from '@/components/report/report.vue'
import { joinActivityReq } from '@/services/project'

const route = useRoute()
const store = useStore()

const { id: activityId } = route.params
store.dispatch('project/getCurrentProjectAction', activityId)

const currentProject = computed(() => store.state.project.currentProject)
const { id: userId } = computed(() => store.state.login.userInfo).value

const handleJoin = async () => {
	const token = window.localStorage.getItem('token')
	if (!token) {
		return ElMessage({
			message: '您还没有登录~',
			type: 'info'
		})
	}
	const res = await joinActivityReq({ activityId, userId })
	if (res.code === 200) {
		ElNotification({
			title: '报名成功',
			message: '等待审核~',
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

</script>

<style lang="less" scoped>
.container {
	margin-top: 10px;

	.header {
		text-align: center;
		border: 1px solid #ccc;
		font-size: 18px;
		padding: 8px 0;
		font-weight: bold;
	}

	.center {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 1px solid #ccc;
		margin-top: 20px;
		padding: 20px 0;

		.image {
			width: 300px;
			height: 330px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.info {
			div {
				margin: 12px 0;
				color: #666;

				span {
					color: #000;
				}
			}

			.time {
				span {
					color: #139208;
				}
			}

			.btn {
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
		}
	}
}
</style>