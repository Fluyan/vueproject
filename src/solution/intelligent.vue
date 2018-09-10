<template>
	<div>
		<div class="intelligentbanner">
			<div class="intelligentinfo" >
				<div class="intelligentmsg">
					<div class="intelligentline"></div>
					<div class="intelligentpoint"></div>
					<h3>智能营销</h3>
					<h5>降低人工成本、实时场景化推荐、冷启动推荐</h5>
					<h6>专注挖掘数据价值，服务业务领域，领跑AI大数据新时代</h6>
					<div class="lookmorebtn">查看更多</div>
				</div>
				<div class="intelligentpic"></div>
			</div>
		</div>
		<div class="intelligentchallenge">
			<h3>用户营销面临的挑战</h3>
			<ul class="challengeList">
				<li>
					<i><img src="../assets/secondaryPages/ssfk.png"></i>
					<h4>更多数据</h4>
					<p>用户产生的数据海量增长</p>
				</li>
				<li>
					<i><img src="../assets/secondaryPages/zwbb.png"></i>
					<h4>更多场景</h4>
					<p>面临的业务场景越来越复杂</p>
				</li>
				<li>
					<i><img src="../assets/secondaryPages/gdsj.png"></i>
					<h4>更长周期</h4>
					<p>用户需要更长的生命周期管理</p>
				</li>
			</ul>
			<div class="changebg"></div>
		</div>
		<div class="intellarchitecture">
			<h3>方案解决架构</h3>
			<div class="intellsolution">
				<div class="basic">
					<h4>基础数据</h4>
					<div class="sjcj">
						<h6>数据采集</h6>
						<p>数据接入、压缩、分布式存储</p>
					</div>
					<div class="sjzh">
						<h6>数据整合</h6>
						<p>数据清洗、整合、管理、脱敏、安全、监控</p>
					</div>
					<div class="cl"></div>
					<div class="sjjr">
						<h6>数据接入</h6>
						<p>公司业务数据、C端馋哦数据、外部数据供应商、外部数据爬取、安全网络日志</p>
					</div>
					<div class="arrowdashed"></div>
				</div>
				<div class="labelwidow">
					<div class="labelpp">
						<h4>标签匹配平台</h4>
						<div class="sjcj">
							<h6>场景+渠道标签</h6>
							<p>时间、位置、渠道</p>
						</div>
						<div class="sjzh">
							<h6>产品与服务标签</h6>
							<p>金融类产品、生活类产品、线上广告等</p>
						</div>
						<div class="cl"></div>
						<div class="sjjr">
							<h6>客户画像标签</h6>
							<p>金融、医疗健康、日常生活、兴趣爱好、人格、基础属性</p>
						</div>
						<div class="arrowdashed"></div>
					</div>
					<div class="tjwindow">
						<h4>推荐系统</h4>
						<div class="sjjr">
							<h6>推荐算法</h6>
							<p>Fatorization Machine、GBDT、协同过滤、DNN、LR</p>
						</div>
						<div class="online">
							<p>在线+离线服务集群</p>
						</div>
						<div class="arrowdashed"></div>
					</div>
					<div class="cl"></div>
				</div>
				
				<div class="ywsy">
					<div class="ywyy">
						<h4>业务应用</h4>
						<div class="sjjr">
							<h6>实时场景化推荐</h6>
							<p>为用户在合适的场景下，推荐合适的产品/服务</p>
						</div>
						<div class="sjjr">
							<h6>冷启动推荐</h6>
							<p>新产品对老用户的匹配 新用户对新老产品的匹配</p>
						</div>
					</div>
					<div class="sypt">
						<h4>实验与验证平台</h4>
						<p class="test">
							实时在线计算
						</p>
						<p class="test">
							流量切分
						</p>
						<p class="test">
							分时离线计算
						</p>
						<p class="test">
							模型效果统计
						</p>
						<div class="arrowdashed"></div>
					</div>
					<div class="cl"></div>
				</div>
			</div>
		</div>
		<div class="intelligentfeature">
			<h3>方案特色</h3>
			<ul class="intelligentfeatureList">
				<li>
					<img src="../assets/secondaryPages/znyxfats1.png">
					<h4>构建购买倾向模型</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/znyxfats2.png">
					<h4>解析营销关键因子</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/znyxfats3.png">
					<h4>适应不同场景的推荐</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
				<li>
					<img src="../assets/secondaryPages/znyxfats4.png">
					<h4>智能推荐一键完成</h4>
					<p>积累了不同类型客户的服务经验，包括保险、金融、互联网等</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="less">
.intelligentbanner{
    background-color: #1F2325;
    background-image: url(../assets/index/banner.png);
    background-size: cover;
    position: relative;
    width: 100%;
    height: 580px;
    min-width: 1000px;
    .intelligentinfo{
        min-width: 900px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
        color:#333;
        background: #fcc;
        top:130px;
        .intelligentmsg{
            float: left;
            margin-top: 78px;
            .intelligentline{
                width:0px;
                height:104px;
                border:1px solid rgba(255,255,255,1);
                position: absolute;
            }
            .intelligentpoint{
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
        .intelligentpic{
            float: right;
            background:url(../assets/secondaryPages/intellbanner.png) no-repeat center;
            width:478px;
            height:447px;
            display: block;
        }
    }
}
.intelligentchallenge{
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
		margin-top: 24px;
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
.intellarchitecture{
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
		margin-top: 24px;
	}
	.intellsolution{
		min-width: 1000px;
        max-width: 1058px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
		position: relative;
		padding:50px;
		color:#333;
		border:1px solid rgba(32,50,96,0.34);
		.basic{
			border:1px dashed rgba(32,50,96,0.34);
			margin-bottom:24px;
			padding:24px 24px 40px 24px;
			position: relative;
			.arrowdashed{
				position: absolute;
				width: 10px;
				height: 56px;
				background: url(../assets/secondaryPages/arrow.png);
				left: 20%;
    			margin-top: 28px;
			}
			h4{
				font-size:24px;
				font-weight: normal;
				color:rgba(32,50,96,1);
				margin-bottom: 24px;
			}
			.sjcj{
				width: 40%;
				float: left;
				padding: 16px 0px 16px 56px;
				background:rgba(255,255,255,1);
				box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
				h6{
					font-size:16px;
					font-weight:normal;
					color:rgba(96,137,216,1);
					line-height:22px;
					margin-bottom: 8px;
				}
				p{
					font-size:16px;
					color:rgba(128,142,165,1);
					line-height:22px;
				}
			}
			.sjzh{
				width: 47%;
				float: right;
				padding: 16px 0px 16px 56px;
				background:rgba(255,255,255,1);
				box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
				h6{
					font-size:16px;
					font-weight:normal;
					color:rgba(96,137,216,1);
					line-height:22px;
					margin-bottom: 8px;
				}
				p{
					font-size:16px;
					color:rgba(128,142,165,1);
					line-height:22px;
				}
			}
			.sjjr{
				width: 94.5%;
				padding: 16px 0px 16px 56px;
				background:rgba(255,255,255,1);
				box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
				margin-top: 16px;
				h6{
					font-size:16px;
					font-weight:normal;
					color:rgba(96,137,216,1);
					line-height:22px;
					margin-bottom: 8px;
				}
				p{
					font-size:16px;
					color:rgba(128,142,165,1);
					line-height:22px;
				}
			}
		}
		.labelwidow{
			margin-bottom:24px;
			h4{
				font-size:24px;
				font-weight: normal;
				color:rgba(32,50,96,1);
				margin-bottom: 24px;
			}
			.labelpp{
				width:48%;
				padding:24px 24px 40px 24px;
				border:1px dashed rgba(32,50,96,0.34);
				float: left;
				position: relative;
				.arrowdashed{
					position: absolute;
					width: 10px;
					height: 56px;
					background: url(../assets/secondaryPages/arrow.png);
					left: 101%;
					top: 48%;
					transform: rotate(-90deg);
				}
				.sjcj{
					width: 28%;
					float: left;
					padding: 16px 0px 16px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					h6{
						font-size:16px;
						font-weight:normal;
						color:rgba(96,137,216,1);
						line-height:22px;
						margin-bottom: 8px;
					}
					p{
						font-size:16px;
						color:rgba(128,142,165,1);
						line-height:22px;
					}
				}
				.sjzh{
					width: 54%;
					float: right;
					padding: 16px 0px 16px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					
					h6{
						font-size:16px;
						font-weight:normal;
						color:rgba(96,137,216,1);
						line-height:22px;
						margin-bottom: 8px;
					}
					p{
						font-size:16px;
						color:rgba(128,142,165,1);
						line-height:22px;
					}
				}
				.sjjr{
					width: 95.5%;
					padding: 16px 0px 16px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					margin-top: 16px;
					h6{
						font-size:16px;
						font-weight:normal;
						color:rgba(96,137,216,1);
						line-height:22px;
						margin-bottom: 8px;
					}
					p{
						font-size:16px;
						color:rgba(128,142,165,1);
						line-height:22px;
					}
				}
			}
			.tjwindow{
				width:41%;
				float: right;
				padding:24px 24px 40px 24px;
				border:1px dashed rgba(32,50,96,0.34);
				position: relative;
				.arrowdashed{
					position: absolute;
					width: 10px;
					height: 56px;
					background: url(../assets/secondaryPages/arrow.png);
					left: 50%;
					margin-top: 28px;
				}
				.sjjr{
					width: 94.5%;
					padding: 16px 0px 16px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					margin-top: 16px;
					h6{
						font-size:16px;
						font-weight:normal;
						color:rgba(96,137,216,1);
						line-height:22px;
						margin-bottom: 8px;
					}
					p{
						font-size:16px;
						color:rgba(128,142,165,1);
						line-height:22px;
					}
				}
				.online{
					width: 94.5%;
					padding: 31px 0px 32px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					margin-top: 16px;
					text-align: center;
					color:rgba(128,142,165,1);
				}
			}
		}
		.ywsy{
			h4{
				font-size:24px;
				font-weight: normal;
				color:rgba(32,50,96,1);
				margin-bottom: 24px;
			}
			.ywyy{
				width: 48%;
				padding: 24px 24px 40px 24px;
				border: 1px dashed rgba(32, 50, 96, 0.34);
				float: left;
				.sjjr{
					width: 94.5%;
					padding: 16px 0px 16px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					margin-top: 16px;
					h6{
						font-size:16px;
						font-weight:normal;
						color:rgba(96,137,216,1);
						line-height:22px;
						margin-bottom: 8px;
					}
					p{
						font-size:16px;
						color:rgba(128,142,165,1);
						line-height:22px;
					}
				}
			}
			.sypt{
				width: 41%;
				float: right;
				padding: 24px 24px 40px 24px;
				border: 1px dashed rgba(32, 50, 96, 0.34);
				position: relative;
				.arrowdashed{
					position: absolute;
					width: 10px;
					height: 56px;
					background: url(../assets/secondaryPages/arrow.png);
					top: 50%;
					transform: rotate(90deg);
					margin-left: -38px;
				}
				.test{
					width: 43%;
					padding: 27px 0px 28px 24px;
					background:rgba(255,255,255,1);
					box-shadow:0px 8px 20px 0px rgba(96,137,216,0.24);
					margin-top: 16px;
					text-align: center;
					color:rgba(128,142,165,1);
					float: left;
					&:nth-of-type(even){
						float: right;
					}
				}
			}
		}
	}
}
.cl{
	clear: both;
}
.intelligentfeature{
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
		margin-top: 24px;
	}
	.intelligentfeatureList{
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