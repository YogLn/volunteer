<template>
	<div class="container">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="用户注册" name="user">
			<user-register/>
		</el-tab-pane>
    <el-tab-pane label="团队注册" name="team">
			<team-register/>
		</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import UserRegister from './user-register.vue';
import TeamRegister from './team-register.vue';

const route = useRoute()
const activeName = ref(route.params?.label)

const handleClick = (tab, event) => {
	// console.log(tab, event);
}

</script>

<style lang="scss" scoped>

</style>