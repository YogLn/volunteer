<template>
	<div class="container">
		<moment-header title="志愿者" />
		<moment-list :list="momentUserList" />
		<moment-header title="志愿团体" />
		<moment-list :list="momentTeamList" />
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";
import MomentHeader from './cpns/header'
import MomentList from './cpns/list'

const store = useStore();

store.dispatch('moment/getArticleListAction', 1)
store.dispatch('moment/getArticleListAction', 2)
const momentUserList = computed(() => store.state.moment.articleUserList)
const momentTeamList = computed(() => store.state.moment.articleUserList)
</script>

<style lang="less" scoped>
</style>