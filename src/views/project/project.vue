<template>
	<div class="container">
		<tab-option />
		<div class="project-list">
			<template v-for="item in projectList">
				<project-box :content="item" @click="handleActivityClick(item)"></project-box>
			</template>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import ProjectBox from './cpns/project-box';
import TabOption from '@/components/option/tab-option';

const store = useStore()
const router = useRouter()

store.dispatch('project/getProjectListAction')

const projectList = computed(() => store.state.project.projectList)
const handleActivityClick = ({ id }) => {
	router.push(`/project/${id}`)
}
</script>

<style lang="less" scoped>
.container {

	.project-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
	}
}
</style>