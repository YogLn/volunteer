<template>
	<div class="container">
		<div class="top">
			<div class="top-center wrap-v2">
				<div class="left"></div>
				<div class="center">
					<el-input v-model="inputValue" size="large">
						<template #prepend>
							<el-select v-model="select" style="width: 110px">
								<el-option label="志愿活动" :value="1" />
								<el-option label="志愿团队" :value="2" />
							</el-select>
						</template>
					</el-input>
					<el-button type="primary" size="large" @click="handleSearch()">搜索</el-button>
				</div>
				<div class="right"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import emitter from '@/utils/eventBus'

const store = useStore()
const router = useRouter()

let select = ref(1)
let inputValue = ref()

const handleSearch = () => {
	if (!inputValue.value) return
	if (select.value === 1) {
		// 志愿活动
		store.dispatch('project/searchAction', inputValue.value)
		router.push('/project')
		emitter.emit('changeIndex', 1)
	} else {
		// 志愿团队
		store.dispatch('team/searchTeamReqAction', inputValue.value)
		router.push('/team')
		emitter.emit('changeIndex', 2)
	}

}
</script>

<style lang="less" scoped>
.container {
	.top {
		width: 100%;
		height: 110px;
		background: url("../../../assets/img/logobg.jpg") no-repeat;
		background-position-x: 50%;

		.top-center {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				width: 330px;
				height: 90px;
				background: url("../../../assets/img/qgzy2.png") no-repeat;
			}

			.center {
				display: flex;
				align-items: center;
			}

			.right {
				width: 130px;
				height: 110px;
				background: url("../../../assets/img/syslog.png") no-repeat;
			}
		}
	}
}
</style>