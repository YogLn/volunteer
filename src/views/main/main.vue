<template>
	<div class="container">
		<Search/>
		<Menu />
		<router-view />
	</div>
</template>

<script setup>
import Search from './cpns/search';
import Menu from './cpns/menu'

</script>

<style lang="less" scoped>

</style>