<template>
	<div class="container">
		<tab-option />
		<div class="team-list">
			<template v-for="item in teamList">
				<team-box :content="item" @click="handleTeamClick(item)"></team-box>
			</template>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import TeamBox from './cpns/team-box'
import TabOption from '@/components/option/tab-option';

const store = useStore();
const router = useRouter();

store.dispatch('team/getTeamListAction')
const teamList = computed(() => store.state.team.teamList)

const handleTeamClick = ({ teamId }) => {
	router.push(`/team/detail/${teamId}`)
}

</script>

<style lang="less" scoped>
.team-list {
	display: flex;
	flex-wrap: wrap;
}
</style>