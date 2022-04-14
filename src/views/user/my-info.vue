<template>
	<Info :myInfo="myInfo" />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";
import Info from './cpns/info'

const store = useStore();

const { id } = JSON.parse(window.localStorage.getItem('userInfo'))
id && store.dispatch('user/getMyInfoAction', id)

const myInfo = computed(() => store?.state?.user?.myInfo)
</script>

<style lang="less" scoped>
</style>