<template>
	<div class="producelist">
		<div class="criusList">
			<ul>
				<li>
					<img src="../assets/index/hxfx.png">
					<h3>画像分析</h3>
					<p>全方位绘制客户画像，支持数据较差分析，数秒生成可视化结果，团队协作共享画像表</p>
					<span class="criusBtn">立即体验</span>
				</li>
				<li>
					<img src="../assets/index/zntj.png">
					<h3>智能推荐</h3>
					<p>构建客户购买倾向性模型，解析营销关键因子，适应不同场景的推荐，只能推荐一键完成</p>
					<span class="criusBtn">立即体验</span>
				</li>
				<li>
					<img src="../assets/index/fxfk.png">
					<h3>风险防控</h3>
					<p>构建风险防控模型，解析风险关键因子，适应不同场景的风控，智能风控一键完成</p>
					<span class="criusBtn">立即体验</span>
				</li>
			</ul>
			<ul>
				<li>
					<img src="../assets/index/znxz.png">
					<h3>智能选址</h3>
					<p>基于大数据预测区域潜力，快速辅助选址决策，简化选址流程</p>
					<span class="criusBtn">立即体验</span>
				</li>
				<li>
					<img src="../assets/index/jqxx.png">
					<h3>机器学习</h3>
					<p>提供一站式解决方案，图形化操作界面，丰富的算法模型，个性化组件参数</p>
					<span class="criusBtn">立即体验</span>
				</li>
				<li>
					<img src="../assets/index/openapi.png">
					<h3>API</h3>
					<p>全方位刻画用户特征，预测客户行为和需求，打破数据流通壁垒，可实时调用</p>
					<span class="criusBtn">立即体验</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="less">
.producelist{
	width: 100%;
	padding:56px 0px 48px 0px;
	position: relative;
	margin-top: 155px;
	background: url(../assets/index/producebg.png) no-repeat;
	background-position: 0px 75px;
	.criusList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
        color:#333;
		ul{
			margin-bottom: 32px;
			height: 343px;
			li{
				width: 32.4%;
				height: 343px;
				float: left;
				list-style: none;
				margin-right: 1.4%;
				&:last-child{
					margin-right: 0px;
				}
				img{
					width: 110px;
					height: 110px;
					display: block;
					margin:0 auto;
					margin-top: 24px;
				}
				h3{
					font-weight: normal;
					font-size:24px;
					color:rgba(22,33,61,0.85);
					margin-top: 32px;
					margin-bottom:16px;
					text-align: center;
				}
				p{
					font-size:16px;
					color:rgba(128,142,165,1);
					line-height:22px;
					text-align: center;
					margin: 0 10px;
				}
				.criusBtn{
					width:130px;
					height:36px;
					display:block;
					background:linear-gradient(135deg,rgba(92,201,242,1) 0%,rgba(136,144,255,1) 100%);
					box-shadow:0px 2px 4px 0px rgba(96,137,216,0.65);
					border-radius:18px;
					
					color: #fff;
					text-align: center;
					line-height: 36px;
					margin: 0 auto;
					margin-top: 24px;
					cursor: pointer;
					&:hover{
						opacity:0.65;
					}
				}
			}
		}
	}
}
</style>
