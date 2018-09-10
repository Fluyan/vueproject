<template>
	<div class="feature">
		<h3>功能特色</h3>
		<ul class="featureList">
			<li v-for="feature in featurelist">
				<img :src="feature.img">
				<h4>{{feature.title}}</h4>
			</li>
		</ul>
		<div class="cl"></div>
	</div>
</template>

<style lang="less">
.feature{
	width: 100%;
	padding:0px 0px 48px 0px;
	position: relative;
	min-width: 1000px;
	h3{
		font-size:32px;
		font-weight:normal;
		color:#35418C;
		line-height:45px;
		text-align:center;
		margin-bottom: 24px;
	}
	.featureList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		li{
			width: 25%;
			float: left;
			list-style: none;
			img{
				width: 100px;
				height: 100px;
				display: block;
				margin:0 auto;
				margin-top: 24px;
			}
			h4{
				font-weight: normal;
				font-size:24px;
				color:rgba(22,33,61,0.85);
				margin-top: 50px;
				margin-bottom:24px;
				text-align: center;
			}
		}
	}
	.cl{
		clear: both;
	}
}
</style>
<script>
export default {
	props:["featurelist"]
}
</script>
