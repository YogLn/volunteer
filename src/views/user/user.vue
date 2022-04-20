<template>
	<div class="container">
		<div class="menu">
			<el-menu class="sidebar-el-menu" :default-active="onRoutes" active-text-color="#20a0ff" router
				:default-openeds="['1', '2', '3']">
				<template v-for="item in items">
					<template v-if="item.subs">
						<el-sub-menu :index="item.index" :key="item.index">
							<template #title>
								<span>{{ item.title }}</span>
							</template>
							<template v-for="subItem in item.subs">
								<el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
									<template #title>{{ subItem.title }}</template>
									<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
										{{ threeItem.title }}</el-menu-item>
								</el-sub-menu>
								<el-menu-item v-else :index="subItem.index">{{ subItem.title }}
								</el-menu-item>
							</template>
						</el-sub-menu>
					</template>
					<template v-else>
						<el-menu-item :index="item.index" :key="item.index">
							<i :class="item.icon"></i>
							<template #title>{{ item.title }}</template>
						</el-menu-item>
					</template>
				</template>
			</el-menu>
		</div>
		<div class="content">
			<!-- <router-view></router-view> -->
			<router-view v-slot="{ Component }">
				<transition name="move" mode="out-in">
					<keep-alive>
						<component :is="Component" />
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from "vue-router";
import { items } from '@/local-data/user';

const route = useRoute();

const onRoutes = computed(() => {
	return route.path;
});
</script>

<style lang="less" scoped>
.container {
	margin-top: 10px;
	display: flex;

	// align-items: center;
	.menu {
		height: 100%;
		width: 20%;
		overflow: hidden;
	}

	.content {
		margin-left: 30px;
		width: 70%;
	}
}
</style>