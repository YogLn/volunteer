<template>
	<Info :myInfo="myInfo" :isShow="false" />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";
import Info from './info'

const store = useStore();

const { id } = JSON.parse(window.localStorage.getItem('userInfo'))
id && store.dispatch('user/getMyInfoAction', id)

const myInfo = computed(() => store?.state?.user?.myInfo)
</script>

<style lang="less" scoped>
</style>