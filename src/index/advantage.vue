<template>
	<div class="advantage">
		<h3>平台优势</h3>
		<ul class="advantageList">
			<li>
				<img src="../assets/index/advantage1.png">
				<h4>高效的数据处理系统</h4>
				<p>基于平安云的数据存储与处理系统，保证数据安全与处理效率。大规模数据计算机引擎高效处理海量数据，使用调用模型结果</p>
			</li>
			<li>
				<img src="../assets/index/advantage2.png">
				<h4>专业的算法配置</h4>
				<p>内容逻辑回归、聚类、协同过滤、异常检测等多种算法。算法库持续更新丰富，更多算法和工具可同时使用。</p>
			</li>
			<li>
				<img src="../assets/index/advantage3.png">
				<h4>便捷的操作界面</h4>
				<p>内置逻辑回归、聚类、协同过滤、异常检测等多种算法。算法库持续更新丰富，更多算法和工具可同时使用。</p>
			</li>
			<li>
				<img src="../assets/index/advantage4.png">
				<h4>卓越的专家团队</h4>
				<p>数百位分析及模型专家，提供专 可靠的技术支持。机器学习、模型优化等多领域项目经验</p>
			</li>
		</ul>
	</div>
</template>

<style lang="less">
.advantage{
	width: 100%;
	padding:0px 0px 48px 0px;
	position: relative;
	//top:2742px;
	min-width: 1000px;
	h3{
		font-size:32px;
		font-weight:normal;
		color:#35418C;
		line-height:45px;
		text-align:center;
		margin-bottom: 24px;
	}
	.advantageList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 334px;
		li{
			width: 25%;
			height: 334px;
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
				font-size:16px;
				color:rgba(22,33,61,0.85);
				margin-top: 40px;
				margin-bottom:24px;
				text-align: center;
			}
			p{
				font-size:16px;
				color:rgba(128,142,165,1);
				line-height:22px;
				text-align: left;
				margin: 0 auto;
				width:189px;
			}
		}
	}
}
</style>
