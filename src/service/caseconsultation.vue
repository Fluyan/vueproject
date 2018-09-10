<template>
	<div>
		<div class="riskbanner">
			<div class="riskinfo" >
				<div class="riskmsg">
					<div class="riskline"></div>
					<div class="riskpoint"></div>
					<h3>风险防控</h3>
					<h5>降低人工成本、AI鉴别欺诈、一站式风控服务</h5>
					<h6>克瑞斯CRIUS提供数据、算法、算力一站式的智能营销服务，沉淀了平安大数据与人工智能领域的多年推荐建模成果帮助金融行业客户智能解决信贷风险评估及审核难题，带来时间及人力成本的极大缩减</h6>
					<div class="lookmorebtn">查看更多</div>
				</div>
				<div class="riskpic"></div>
			</div>
		</div>
		<div class="riskchallenge">
			<h3>风险防控面临的挑战</h3>
			<ul class="challengeList">
				<li>
					<i><img src="../assets/secondaryPages/ssfk.png"></i>
					<h4>实时风控</h4>
					<p>潜在风险发现滞后</p>
				</li>
				<li>
					<i><img src="../assets/secondaryPages/zwbb.png"></i>
					<h4>真伪辨别</h4>
					<p>客户信息真伪难以甄别</p>
				</li>
				<li>
					<i><img src="../assets/secondaryPages/gdsj.png"></i>
					<h4>更多数据</h4>
					<p>海量数据来源</p>
				</li>
			</ul>
			<div class="changebg"></div>
		</div>
		<div class="architecture">
			<h3>方案特色</h3>
			<div class="featurebg"></div>
		</div>
		<div class="riskfeature">
			<h3>方案特色</h3>
			<ul class="riskfeatureList">
				<li>
					<img src="../assets/secondaryPages/fats1.png">
					<h4>构建风险防控模型</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/fats2.png">
					<h4>解析风险关键因子</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/fats3.png">
					<h4>适应不同场景的风控</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/fats4.png">
					<h4>智能风控一键完成</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="less">
.riskbanner{
    background-color: #1F2325;
    background-image: url(../assets/index/banner.png);
    background-size: cover;
    position: relative;
    width: 100%;
    height: 580px;
    min-width: 1000px;
    .riskinfo{
        min-width: 900px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
        color:#333;
        background: #fcc;
        top:130px;
        .riskmsg{
            float: left;
            margin-top: 78px;
            .riskline{
                width:0px;
                height:104px;
                border:1px solid rgba(255,255,255,1);
                position: absolute;
            }
            .riskpoint{
                width:8px;
                height:8px;
                background:rgba(255,255,255,1);
                border-radius: 4px;
                position: absolute;
                margin-top: 150px;
                margin-left: -4px;
            }
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
                height:56px;
                font-size:20px;
                line-height:28px;
                margin-top:16px;
            }
            h6{
                font-family:"微软雅黑";
                margin-left:18px;
                font-weight:normal;
                width:290px;
                font-size:12px;
                color:rgba(255,255,255,0.6);
                line-height:17px;
                margin-top: 8px;
            }
            .lookmorebtn{
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
        .riskpic{
            float: right;
            background:url(../assets/secondaryPages/riskbanner.png) no-repeat center;
            width:478px;
            height:447px;
            display: block;
        }
    }
}
.riskchallenge{
	width: 100%;
	padding:0px 0px 48px 0px;
	position: relative;
	min-width: 1000px;
	.changebg{
		position: absolute;
		background: url(../assets/secondaryPages/changebg.png) no-repeat;
		background-size:374px;
		width: 374px;
		height: 423px;
		right: 10px;
    	top: 73px;
	}
	h3{
		font-size:32px;
		font-weight:normal;
		color:#35418C;
		line-height:45px;
		text-align:center;
		margin-bottom: 24px;
		margin-top: 52px;
	}
	.challengeList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 225px;
		li{
			width: 33.3%;
			float: left;
			list-style: none;
			i{
				width: 100px;
				height: 100px;
				display: block;
				margin:0 auto;
				img{
					display: block;
					margin:0 auto;
					margin-top: 24px;
				}
			}
			
			h4{
				font-weight: normal;
				font-size:16px;
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
			}
		}
	}
}
.architecture{
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
		margin-bottom: 40px;
		margin-top: 52px;
	}
	.featurebg{
		min-width: 1000px;
        max-width: 1056px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		background: url(../assets/secondaryPages/jgt.png);
		background-size: cover;
		height:666px;
	}
}
.riskfeature{
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
		margin-top: 52px;
	}
	.riskfeatureList{
		min-width: 1000px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
		color:#333;
		height: 225px;
		li{
			width: 24.25%;
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
</style>



