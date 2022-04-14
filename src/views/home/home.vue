<template>
	<div class="container">
		<div class="banner">
			<el-carousel>
				<el-carousel-item v-for="item in carouselList" :key="item">
					<img :src="item" alt />
				</el-carousel-item>
			</el-carousel>
			<div class="btn-menu">
				<div class="btn1"></div>
				<div class="btn2"></div>
				<div class="btn3"></div>
			</div>
		</div>
		<div class="about">
			<a href="https://sc.zhiyuanyun.com/app/org/list.php?mode=map"></a>
			<a href="https://www.chinavolunteer.cn/show/1032871.html"></a>
			<a href="https://sc.zhiyuanyun.com/app/user/query.php"></a>
		</div>
	</div>
</template>

<script setup>
import { carouselList } from '@/local-data/home'

</script>

<style lang="less" scoped>
.container {
	.banner {
		display: flex;

		.el-carousel {
			width: 31.25rem;
			height: 18.75rem;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.btn-menu {
			display: flex;

			.btn1,
			.btn2,
			.btn3 {
				background: url("../../assets/img/tbutbg2.png") no-repeat;
				border: 1px solid #ddd;
				width: 156px;
				height: 300px;
				margin-left: 8px;
				margin-left: 4px;
				border-radius: 5px;
				cursor: pointer;
			}

			.btn1 {
				background-position: 0 0;
				background-color: #fffcfa;
			}

			.btn2 {
				background-position: -170px 0;
				background-color: #fdfff7;
			}

			.btn3 {
				background-position: -339px 0;
				background-color: #f7fbfe;
			}
		}
	}

	.about {
		background: url('../../assets/img/top2.png') -5px 2px no-repeat;
		height: 110px;
		margin: 0 auto;
		width: 1000px;

		a {
			display: inline-block;
			width: 330px;
			height: 90px;
			margin-top: 10px;
			text-decoration: none;
			color: #0088cc;

			&:hover {
				opacity: 0.4;
				filter: alpha(opacity=40);
				background: #1eaaff;
				-moz-border-radius: 5px;
				-webkit-border-radius: 5px;
				border-radius: 5px;
			}
		}
	}

	/deep/ .el-carousel__indicator--horizontal .el-carousel__button {
		width: 10px;
		height: 10px;
		background: transparent;
		border: 1px solid #ffffff;
		border-radius: 50%;
		opacity: 0.5;
	}

	/deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button {
		width: 10px;
		height: 10px;
		background: #ffffff;
		border-radius: 50%;
		opacity: 1;
	}
}
</style>