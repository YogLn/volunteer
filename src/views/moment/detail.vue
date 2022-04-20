<template>
	<div class="container">
		<h2>{{ currentMoment.title }}</h2>
		<div class="info">
			<div class="time">日期：{{ $filter.formatTime(currentMoment.createDate) }}</div>
			<div class="sources">来源：{{ currentMoment.source }}</div>
		</div>
		<div class="content" v-for="item in content">
			<p>{{ item }}</p>
		</div>
		<el-divider />
		<div class="comment-ctl">
			<el-input v-model="commentValue" :rows="4" type="textarea" placeholder="请输入评论内容" />
			<div class="btn">
				<report />
				<el-button @click="handleCommentClick()" type="primary">添 加</el-button>
			</div>
		</div>
		<div class="comment-list">
			<template v-for="item in commentList">
				<comment :content="item" :postId="postId" @getCommentList="getCommentList()" />
				<div class="child-comment">
					<template v-for="iten in item.commentList">
						<comment :content="iten" :postId="postId" @getCommentList="getCommentList()" :replayName="item.username" />
						<template v-for="it in iten.commentList">
							<comment :content="it" :postId="postId" @getCommentList="getCommentList()" :replayName="iten.username" />
						</template>
					</template>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from "vuex"
import { addComment } from '@/services/moment'
import { ElMessage } from 'element-plus'
import Comment from './cpns/comment'
import Report from '@/components/report/report.vue'

const route = useRoute()
const store = useStore()

const { id: postId } = route.params
const commentValue = ref('')

store.dispatch('moment/getMomentDetailAction', postId)
store.dispatch('moment/getCommentListAction', postId)

const currentMoment = computed(() => store.state.moment.currentMoment)
const commentList = computed(() => store.state.moment.commentList)
const content = computed(() => currentMoment.value?.content?.split('\n'))
const { id: userId } = computed(() => store.state.login.userInfo).value

const handleCommentClick = async () => {
	const token = window.localStorage.getItem('token')
	if (!token) {
		return ElMessage({
			message: '您还没有登录~',
			type: 'info'
		})
	}
	if (!commentValue.value) return
	const res = await addComment({
		userId,
		postId,
		comment: commentValue.value
	})
	if (res.code === 200) {
		ElMessage.success('评论成功~')
		store.dispatch('moment/getCommentListAction', postId)
	}
}

const getCommentList = () => {
	store.dispatch('moment/getCommentListAction', postId)
}
</script>

<style lang="less" scoped>
.container {
	border: 1px solid #ccc;
	margin-top: 10px;
	padding: 20px;

	h2 {
		text-align: center;
	}

	.info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 20px 0;
	}

	.info+.content {
		text-indent: 2em;
	}

	.content {
		font-family: 宋体;
		font-size: 14px;
		text-align: left;
		line-height: 32px;
		margin: 10px 10px 10px 20px;
		color: #333;
	}

	.comment-ctl {

		.btn {
			display: flex;
			justify-content: flex-end;
			margin-top: 15px;

			.el-button {
				margin-left: 20px;
			}
		}
	}

	.comment-list {
		margin-top: 30px;
		padding: 0 30px;

		.child-comment {
			padding-left: 30px;
		}
	}
}
</style>