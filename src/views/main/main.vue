<template>
	<div class="container">
		<Header />
		<Search />
		<Menu />
		<div class="router-view">
			<router-view />
		</div>
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue';
import Search from './cpns/search';
import Menu from './cpns/menu'
</script>

<style lang="less" scoped>
.router-view {
	padding: 0 200px;
}
</style>