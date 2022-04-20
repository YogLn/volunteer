<template>
	<div class="wrapper">
		<div class="serveType">
			<div class="text">服务类型</div>
			<div class="btn-list">
				<el-radio-group v-model="select.serveType" v-for="item in serveTypeList" @change="handleRadioChange()">
					<el-radio-button :label="item" />
				</el-radio-group>
			</div>
		</div>
		<div class="area">
			<div class="text">服务区域</div>
			<div class="btn-list">
				<el-radio-group v-model="select.area" v-for="item in areaList" @change="handleRadioChange()">
					<el-radio-button :label="item" />
				</el-radio-group>
			</div>
		</div>
		<div class="people">
			<div class="text">服务区域</div>
			<div class="btn-list">
				<el-radio-group v-model="peopleRef" v-for="item in peopleList" @change="handleRadioChange()">
					<el-radio-button :label="item" />
				</el-radio-group>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useStore } from "vuex"
import { useRoute } from 'vue-router'
import { areaList, peopleList, serveTypeList } from '@/local-data/provinces'

const store = useStore()
const route = useRoute()

const peopleRef = ref()
const select = reactive({
	serveType: '',
	area: '',
})

const handleRadioChange = () => {
	// 判断3个全为全部
	if (select.serveType === '全部' && peopleRef.value === '全部' && select.area === '全部') {
		if (route.name === 'Team') {
			return store.dispatch('team/getTeamListAction')
		} else {
			return store.dispatch('project/getProjectListAction')
		}
	}
	const temp = {
		minPeople: peopleRef.value?.split('-')[0] || 0,
		maxPeople: peopleRef.value?.split('-')[1] || 1000,
		...select,
	}

	if (select.serveType === '全部') {
		temp.serveType = ''
	}

	if (select.area === '全部') {
		temp.area = ''
	}
	if (route.name === 'Team') {
		store.dispatch('team/teamFilterAction', {
			...temp
		})
	} else {
		store.dispatch('project/activityFilterAction', {
			minPeople: peopleRef.value?.split('-')[0] || 0,
			maxPeople: peopleRef.value?.split('-')[1] || 1000,
			...temp
		})
	}

}
</script>

<style lang="less" scoped>
.wrapper {
	margin: 20px 0 10px;

	.el-radio-button {
		margin: 5px;
	}

	.serveType,
	.area,
	.people {
		display: flex;

		.text {
			margin-top: 10px;
		}

		.btn-list {
			width: 90%;
		}
	}

	.area {
		flex-wrap: wrap;
	}
}
</style>