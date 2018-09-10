<template>
	<div class="introduceservice">
		<h3>功能服务</h3>
		<ul class="serviceList">
			<li v-for="service in servicelist">
				<img :src="service.img">
				<div class="serviceinfo">
					<h4>{{service.title}}</h4>
					<p>{{service.info}}</p>
				</div>
			</li>
		</ul>
		<div class="cl"></div>
	</div>
</template>

<style lang="less">
.introduceservice{
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
		margin-top: 56px;
	}
	.serviceList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		li{
			width: 50%;
			float: left;
			list-style: none;
			height: 185px;
			img{

				float: left;
				margin-left: 60px;
				margin-right: 75px;
				margin-top: 24px;
			}
			.serviceinfo{
				float: left;
				h4{
					font-weight: normal;
					font-size:24px;
					color:rgba(22,33,61,0.85);
					margin-top: 24px;
					margin-bottom:26px;
					text-align: left;
				}
				p{
					font-size:16px;
					color:rgba(128,142,165,1);
					line-height:22px;
					text-align: left;
					margin: 0 auto;
					width:300px;
				}
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
	props:['servicelist']
}
</script>
