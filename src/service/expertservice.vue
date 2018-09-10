<template>
	<div>
		<div class="expertbanner">
			<div class="bannerinfo">
				<div class="bannermain">
					<h3>专家服务</h3>
					<h5>智能引擎大数据</h5>
					<h6>专注挖掘数据价值，服务业务领域，领跑AI大数据新时代</h6>
					<div class="bannerbtn">立即体验</div>
				</div>
				<div class="mainpic"></div>
			</div>
		</div>
		<div class="expertdata">
			<h3>优势与特色</h3>
			<p>大数据与人工智能时代，数据是最宝贵的资源。如何挖掘有价值的数据、正确解读数据、让数据驱动发展，成为每一个企业提升经营效益与发展质量的关键一步。智能引擎大数据团队多年来积累了多领域丰富的技术和业务经验，我们的专家严对将利用最前沿的大数据与人工智能技术，协助金融机构及各类企业深度挖掘潜在的企业大数据价值，用大数据推动解决您的实际业务问题，助力您领跑人工智能和大数据新时代</p>
		</div>
		<div class="expertservice">
			<h3>服务范围</h3>
			<div class="servicescope">
				<ul class="serviceList">
					<li v-for="service in servicelist">
						<img :src="service.img">
						<div class="serviceinfo">
							<h4>{{service.title}}</h4>
							<p>{{service.info}}</p>
						</div>
					</li>
				</ul>
				<div class="servicescopebg"><img src="../assets/service/serviceright.png"></div>
			</div>
			<div class="changebg"></div>
		</div>
		<div class="cl"></div>
		<div class="expertfeature">
			<h3>优势与特色</h3>
			<ul class="expertfeatureList">
				<li>
					<img src="../assets/secondaryPages/fats1.png">
					<h4>丰富的业务经验</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等领域</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/fats2.png">
					<h4>高效的大数据平台</h4>
					<p>基于集团领先的大数据计算与存储架构，确保数据安全与处理高效</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/fats3.png">
					<h4>流畅的产品使用体验</h4>
					<p>无论您是业务人员还是技术人员，均可快速上手</p>
				</li>
			</ul>
		</div>
		<div class="cl"></div>
		<div class="expertcase">
			<h3>案例介绍</h3>
			<ul class="expertcaseList">
				<li>
					<img src="../assets/service/casebg1.png">
					<div class="expertmsg">
						<i><img src="../assets/service/case1.png"></i>
						<h4>寿险新渠道区拓项目</h4>
						<p>利用人工智能技术实现自动化渠道服务、销售，实现技术变革。替代坐席大量的重复性工作，兼顾成效、成本及客户体验，带来实质性突破。</p>
					</div>
					
				</li>
				<li>
					<img src="../assets/service/casebg2.png">
					<div class="expertmsg">
						<i><img src="../assets/service/case2.png"></i>
						<h4>寿险新渠道区拓项目</h4>
						<p>利用人工智能技术实现自动化渠道服务、销售，实现技术变革。替代坐席大量的重复性工作，兼顾成效、成本及客户体验，带来实质性突破。</p>
					</div>
				</li>
				<li>
					<img src="../assets/service/casebg3.png">
					<div class="expertmsg">
						<i><img src="../assets/service/case3.png"></i>
						<h4>寿险新渠道区拓项目</h4>
						<p>利用人工智能技术实现自动化渠道服务、销售，实现技术变革。替代坐席大量的重复性工作，兼顾成效、成本及客户体验，带来实质性突破。</p>
					</div>
				</li>
				<li>
					<img src="../assets/service/casebg4.png">
					<div class="expertmsg">
						<i><img src="../assets/service/case4.png"></i>
						<h4>寿险新渠道区拓项目</h4>
						<p>利用人工智能技术实现自动化渠道服务、销售，实现技术变革。替代坐席大量的重复性工作，兼顾成效、成本及客户体验，带来实质性突破。</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="cl"></div>
	</div>
</template>

<style lang="less" >
.expertbanner{
	background-color: #1F2325;
	background-image: url(../assets/index/banner.png);
	background-size: cover;
	position: relative;
	width: 100%;
    height:580px;
	min-width: 1000px;
	  .bannerinfo{
          min-width: 1000px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          zoom: 1;
          position: relative;
          color:#333;
          top:100px;
        .bannermain{
            position: absolute;
            left: 0px;
            margin-top: 130px;
            h3{
                font-size:48px;
                font-weight:normal;
                color:#fff;
                font-family:"微软雅黑";
                margin-left:18px;
            }
            h5{	
                font-weight:normal;
                color:#fff;
                font-family:"微软雅黑";
                margin-left:18px;
                width:353px;
                font-size:20px;
                line-height:28px;
                margin-top:16px;
            }
            h6{
                font-family:"微软雅黑";
                margin-left:18px;
                font-weight:normal;
                font-size:12px;
                color:rgba(255,255,255,0.6);
                line-height:17px;
                margin-top: 12px;
			}
			.bannerbtn{
                width:118px;
                height:36px;
                background:rgba(82,108,242,1);
                border-radius:18px;
                text-align: center;
                line-height: 36px;
                color: #fff;
                cursor: pointer;
                margin-top: 34px;
                margin-left: 30px;
                &:hover{
                    background:rgba(122,144,252,1);
                }
            }
        }
        .mainpic{
            margin-top: 8px;
            background:url(../assets/service/servicebg.png) no-repeat center;
            width:441px;
            height:427px;
            display: block;
            position: absolute;
            right: 0px;
        }
    }
}

.expertdata{
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
		margin-bottom:24px;
		margin-top: 52px;
	}
	p{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		font-size:20px;
		color:rgba(128,142,165,1);
		line-height:28px;
		text-align: left;
	}
}
.expertservice{
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
		margin-bottom:24px;
		margin-top: 20px;
	}
	.changebg{
		position: absolute;
		background: url(../assets/secondaryPages/changebg.png) no-repeat;
		background-size:374px;
		width: 374px;
		height: 423px;
		right: 10px;
		top: -125px;
	}
	.servicescope{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 225px;
		
		.serviceList{
			width: 50%;
			float: left;
			li{
				list-style: none;
				margin-bottom:30px;
				height: 120px;
				img{
					float: left;
					margin-right: 46px;
				}
				.serviceinfo{
					float: left;
					width: 70%;
					h4{
						font-weight: normal;
						font-size:24px;
						color:rgba(22,33,61,0.85);
						margin-bottom:16px;
						text-align: left;
					}
					p{
						font-size:16px;
						color:rgba(128,142,165,1);
						line-height:22px;
						text-align: left;
						margin: 0 auto;

					}
				}
			}
		}
		.servicescopebg{
			float: right;
			margin-top: 100px;
		}
	}
}
.cl{
	clear: both;
}
.expertfeature{
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
		margin-bottom:54px;
		margin-top: 20px;
	}
	.expertfeatureList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 225px;
		li{
			width: 32%;
			float: left;
			list-style: none;
			margin-right:1%;
			height:218px;
			background:rgba(244,247,252,1);
			position: relative;
			&:last-child{
				margin-right: 0px;
			}
			img{

				position: absolute;
				top: -30px;
				left: 50%;
				margin-left: -30px;
			}
			h4{
				font-weight: normal;
				font-size:24px;
				color:rgba(22,33,61,0.85);
				margin-top: 63px;
				margin-bottom:23px;
				text-align: center;
			}
			p{
				font-size:16px;
				color:rgba(128,142,165,1);
				line-height:22px;
				text-align: left;
				width:163px;
				margin:0 auto;
			}
		}
	}
}
.expertcase{
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
		margin-bottom:54px;
		margin-top: 20px;
	}
	.expertcaseList{
		min-width: 1000px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 363px;
		li{
			width: 25%;
			float: left;
			list-style: none;
			position: relative;
			img{
				margin: 0 auto;
    			display: block;
			}
			.expertmsg{
				position: absolute;
				top: 50%;
				left: 50%;
				transform:translate(-50%,-50%);
				margin:auto;
				width: 200px;
				height: 100px;
				overflow: hidden;
				-webkit-transition: all 0.35s;
				transition: all 0.35s;
				h4{
					font-weight: normal;
					font-size:20px;
					color:rgba(255,255,255,1);
					margin-top: 16px;
					margin-bottom:20px;
					text-align: center;
				}
				p{
					font-size:14px;
					color:rgba(255,255,255,1);
					line-height:20px;
					text-align: left;
					width:163px;
					margin:0 auto;
					
				}
			}
			&:hover{
				.expertmsg{
					height: 240px;
				}
			}
			
		}
	}
}	
</style>

<script>
import service1 from '../assets/service/jzyx.png'
import service2 from '../assets/service/znfk.png'
import service3 from '../assets/service/ptcp.png'
import service4 from '../assets/service/nlpj.png'

export default {
	data(){
        return{
             servicelist:[{
				 	img:service1,
                    title:'精准营销',
                    info:'通过涵盖金融、保险、移动互联网等多维度的数据进行精准建模，为您准确识别客户的产品需',
                },{
					img:service2,
                    title:'智能风控',
                    info:'我们将按照您的业务场景和具体要求，准确识别出客户的投资与欺诈风险，从而降低业务风险与损失'
                },{
					img:service3,
                    title:'平台产品',
                    info:'我们的大数据平台克瑞斯CRIUS将协助您进行从BI分析到机器学习建模的全流程，支持API实时调用结果'
                },{
					img:service4,
                    title:'能力普及',
                    info:'我们通过AI学院传授实用的大数据与人工智能知识与能力，全方位土改您的业务与技术应用能力'
                }
			],
		}
	}
}
</script>
