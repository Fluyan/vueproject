<template>
	<div class="business">
		<h3>业务场景</h3>
		<div class="carousel">
			<el-carousel :interval="5000" arrow="always">
				<el-carousel-item v-for="(item,index) in bannerlist" :key="index">
					<div class="carouselmain">
						<div class="carouselpic" :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>
						<div class="carouselmsg">
							<h4>{{item.title}}</h4>
							<p>{{item.infos}}</p>
						</div>
					</div>
					
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>
<script>
import lab1 from "../assets/index/lab1.png"
export default {
  components:{
  },
  data () {
    return {
		bannerlist:[
			{
				imgUrl:lab1,
				title:"智能营销",
				infos:"在智能营销场景中，克瑞斯内嵌一体化的“客户-场景-产品”推荐平台，整合多方数据源进行客户画像分析，构筑不同产品客群画像。用户无需技术背景，一键完成智能风控模型建立，支持贷前审核、贷后监控、信用卡反欺诈等多种场景的风险控制和风险预警。"

			},
			{
				imgUrl:lab1,
				title:"智能营销",
				infos:"在智能营销场景中，克瑞斯内嵌一体化的“客户-场景-产品”推荐平台，整合多方数据源进行客户画像分析，构筑不同产品客群画像。用户无需技术背景，一键完成智能风控模型建立，支持贷前审核、贷后监控、信用卡反欺诈等多种场景的风险控制和风险预警。"
			}
		]
    }
  }
}
</script>
<style lang="less">
.business{
	width: 100%;
	padding:0px 0px 48px 0px;
	position: relative;
	//top: 1754px;
	min-width: 1000px;
	h3{
		font-size:32px;
		font-weight:normal;
		color:#35418C;
		line-height:45px;
		text-align:center;
		margin-bottom: 24px;
	}
	.carousel{
		width: 100%;
		height: 357px;
		background: #F2F5FA;
		
		.carouselmain{
			min-width: 1000px;
			max-width: 1100px;
			margin-left: auto;
			margin-right: auto;
			zoom: 1;
			position: relative;
			margin-top: 50px;
			height: 257px;
			.carouselpic{
				width: 384px;
				height: 257px;
				float: left;
				margin-left:50px;
			}
			.carouselmsg{
				float:right;
				width:415px;
				margin-right:50px;
				h4{
					font-size:24px;
					font-weight:normal;
					color:rgba(22,33,61,1);
					line-height:33px;
					text-align: center;
					margin-top: 40px;
					margin-bottom: 24px;
				}
				p{
					height:114px;
					font-size:16px;
					color:rgba(55,76,131,1);
					line-height:22px;
					
				}
				
			}
		}
		
	}
}
</style>
