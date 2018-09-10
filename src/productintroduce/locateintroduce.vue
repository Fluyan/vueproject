<template>
	<div>
		<Introducebanner :passData="passdata"></Introducebanner>
		<Introduceservice :servicelist="servicelist"></Introduceservice>
		<Introducefeature :featurelist="featurelist"></Introducefeature>
	</div>
</template>

<style lang="less" scoped>
	.bannerinfo{
		background: url(../assets/secondaryPages/recommend.png) center no-repeat;
	}
</style>
<script>
import Introducebanner from "./introducebanner.vue"
import Introduceservice from "./introduceservice.vue"
import Introducefeature from "./introducefeature.vue"

import recommend1 from "../assets/secondaryPages/recommendA1.png"
import recommend2 from "../assets/secondaryPages/recommendA2.png"
import recommend3 from "../assets/secondaryPages/recommendA3.png"
import recommend4 from "../assets/secondaryPages/recommendA4.png"
import recommend5 from "../assets/secondaryPages/recommendA5.png"
import recommend6 from "../assets/secondaryPages/recommendA6.png"

import recommend7 from "../assets/secondaryPages/recommendB1.png"
import recommend8 from "../assets/secondaryPages/recommendB2.png"
import recommend9 from "../assets/secondaryPages/recommendB3.png"
import recommend10 from "../assets/secondaryPages/recommendB4.png"

export default {
	data(){
		return{
			passdata:{
				bannertitle:'智能选址',
				bannerinfo:'内置模型解析关键因子，计算客户购买倾向分',
				bannermsg:'全方位刻画用户特征，预测客户行为和需求，常用脸谱和分裂投资倾向分、风险偏好等，可实时调用。',
				bannerurl:'zntj'
			},
			servicelist:[
				{
					title:'构建客户购买性模型',
					info:'智能推荐给予客户购买数据及其自身属性等多维度数据，利用机器学习算法，构建客户购买倾向性模型',
					img:recommend1
				},
				{
					title:'构建客户购买性模型',
					info:'智能推荐给予客户购买数据及其自身属性等多维度数据，利用机器学习算法，构建客户购买倾向性模型',
					img:recommend2
				},
				{
					title:'构建客户购买性模型',
					info:'智能推荐给予客户购买数据及其自身属性等多维度数据，利用机器学习算法，构建客户购买倾向性模型',
					img:recommend3
				},
				{
					title:'构建客户购买性模型',
					info:'智能推荐给予客户购买数据及其自身属性等多维度数据，利用机器学习算法，构建客户购买倾向性模型',
					img:recommend4
				},
				{
					title:'构建客户购买性模型',
					info:'智能推荐给予客户购买数据及其自身属性等多维度数据，利用机器学习算法，构建客户购买倾向性模型',
					img:recommend5
				},
				{
					title:'构建客户购买性模型',
					info:'智能推荐给予客户购买数据及其自身属性等多维度数据，利用机器学习算法，构建客户购买倾向性模型',
					img:recommend6
				}
			],
			featurelist:[
				{
					title:'快速实时',
					img:recommend7
				},
				{
					title:'操作简便',
					img:recommend7
				},
				{
					title:'算法丰富',
					img:recommend7
				},
				{
					title:'定期迭代',
					img:recommend7
				}
			]
		}
	},
	components:{
		Introducebanner,
		Introduceservice,
		Introducefeature
	}
}
</script>


