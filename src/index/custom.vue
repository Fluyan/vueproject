<template>
	<div class="custom">
		<h3>针对角色</h3>
		<ul class="customList">
			<li>
				<img src="../assets/index/ywry.png">
				<h4>业务人员</h4>
				<p>学习如何使用大数据分析，智能建模等提升业务成效，无需统计知识和编程背景</p>
			</li>
			<li>
				<img src="../assets/index/jsry.png">
				<h4>技术人员</h4>
				<p>学习大数据和AI模型理论与主流框架，搭建个性化算法预测模型，解决实际业务问题</p>
			</li>
		</ul>
	</div>
</template>

<style lang="less">
.custom{
	width: 100%;
	padding:0px 0px 48px 0px;
	position: relative;
	//top:2228px;
	min-width: 1000px;
	background: url(../assets/index/custombg.png) no-repeat;
	background-position:right;
	background-size:280px;
	h3{
		font-size:32px;
		font-weight:normal;
		color:#35418C;
		line-height:45px;
		text-align:center;
		margin-bottom: 24px;
	}
	.customList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 397px;
		li{
			width: 50%;
			height: 397px;
			float: left;
			list-style: none;
			img{
				width: 160px;
				height: 160px;
				display: block;
				margin:0 auto;
				margin-top: 48px;
			}
			h4{
				font-weight: normal;
				font-size:24px;
				color:rgba(22,33,61,0.85);
				margin-top: 80px;
				margin-bottom:24px;
				text-align: center;
			}
			p{
				font-size:16px;
				color:rgba(128,142,165,1);
				line-height:22px;
				text-align: center;
				margin: 0 auto;
				width:338px;
			}
		}
	}
}
</style>
