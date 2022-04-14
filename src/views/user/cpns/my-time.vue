<template>
	<div id="myEcharts" :style="{ width: '400px', height: '300px' }"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
// 按需引入
import * as echarts from 'echarts/core';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { getMyServeReq } from '@/services/user'
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);


const activityName = ref([])
const serveTime = ref([])
const getSerList = async () => {
	const { data } = await getMyServeReq()
	for (const item of data) {
		activityName.value.push(item.activityName)
		serveTime.value.push(item.serveTime)
	}
}
getSerList()
onMounted(() => {
	setTimeout(() => {
		let chart = echarts.init(document.getElementById("myEcharts"));
		// 把配置和数据放这里
		chart.setOption({
			xAxis: {
				type: 'category',
				data: activityName.value
			},
			yAxis: {
				type: 'value'
			},
			tooltip: {
				trigger: "axis"
			},
			series: [
				{
					type: 'bar',
					data: serveTime.value
				}
			]
		});
	}, 2000)
});
onUnmounted(() => {
	echarts.dispose();
});
</script>

<style lang="less" scoped>
</style>