<template>
	<div>
		<div class="wrapper">
			<div class="info">
				<div class="username">
					<span>{{ content.username }}</span>
					<template v-if="replayName">
						回复{{ replayName }}
					</template>
					说：
				</div>
				<div class="comment">{{ content.comment }}</div>
			</div>
			<div class="time">{{ $filter.formatTime(content.createDate) }}<span class="replay" @click="show = true">回复</span>
			</div>
		</div>
		<div class="replay-input" v-if="show">
			<el-input v-model="commentValue" placeholder="评论的内容"></el-input>
			<el-button type="info" @click="show = false">取消</el-button>
			<el-button type="primary" @click="handleReplay">回复</el-button>
		</div>
	</div>
</template>

<script setup>
import { defineProps, ref, computed, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { addComment } from '@/services/moment'
import { ElMessage } from 'element-plus';

const { content, postId, replayName = null } = defineProps({ content: { type: Object }, postId: { type: String }, replayName: { type: String } })
const emit = defineEmits(['getCommentList'])
const store = useStore()

const show = ref(false)
const commentValue = ref('')

const { id: userId } = computed(() => store.state.login.userInfo).value

const handleReplay = async () => {
	const token = window.localStorage.getItem('token')
	if (!token) {
		return ElMessage({
			message: '您还没有登录~',
			type: 'info'
		})
	}
	if (!commentValue.value) return
	const { code } = await addComment({
		comment: commentValue.value,
		postId: parseInt(postId),
		replyId: content.id,
		userId
	})
	if (code === 200) {
		ElMessage.success('评论成功~')
		emit('getCommentList')
		show.value = false
	}
}
</script>

<style lang="less" scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;

	.info {
		display: flex;
		align-items: center;
		font-size: 14px;

		.comment {
			display: flex;
			margin-left: 12px;
		}

		.username {
			span {
				font-weight: bold;
				font-size: 15px;
			}
		}
	}

	.time {
		font-size: 12px;
		color: #666;

		.replay {
			margin-left: 20px;
			cursor: pointer;
		}
	}
}

.replay-input {
	display: flex;
	margin-top: 15px;
}
</style>