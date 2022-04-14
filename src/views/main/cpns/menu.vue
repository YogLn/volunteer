<template>
	<div class="container">
		<div class="navbar wrap-v3">
			<template v-for="item, index in homeMenu" :key="item.title">
				<div
					class="nav-item"
					:class="index === currentIndexRef ? 'active' : ''"
					@click="handleNavClick(item, index)"
				>{{ item.title }}</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { homeMenu } from '@/local-data/home';
import emitter from '@/utils/eventBus'

emitter.on('changeIndex', index => currentIndexRef.value = index)

let currentIndexRef = ref(0);
const handleNavClick = ({ path }, index) => {
	router.push(path)
	currentIndexRef.value = index
}
</script>

<style lang="less" scoped>
.container {
	margin-top: 2px;
	width: 100%;
	height: 40px;
	background: linear-gradient(#3374db, #2667db);

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.nav-item {
			line-height: 40px;
			width: 10%;
			text-align: center;
			cursor: pointer;
			&:hover {
				background-color: #fff;
			}
		}
		.active {
			background-color: #fff;
		}
	}
}
</style>