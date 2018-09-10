<template>
	<div class="introducebanner">
		<div class="bannerinfo">
			<div class="bannermain">
				 <h3>{{passData.bannertitle}}</h3>
				<h5>{{passData.bannerinfo}}</h5>
				<h6>{{passData.bannermsg}}</h6>
				<div class="bannerbtn" @click="goIncrius(passData.bannerurl)">立即体验</div>
			</div>
			<div class="mainpic"></div>
		</div>
	</div>
</template>

<style lang="less">
.introducebanner{
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
        background: #fcc;
        top:100px;
        .bannermain{
			position: absolute;
			left: 0px;
            margin-top: 78px;
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
            background:url(../assets/secondaryPages/recommend.png) no-repeat center;
            width:712px;
            height:422px;
			display: block;
			position: absolute;
			right: 0px;
        }
    }
}
</style>
<script>
export default {
	props:["passData"],
	methods:{
		goIncrius(parameter){
			let self = this
			if(parameter == "hxfx" ){
				self.$router.push({path:'/solution/profiledata'})
			}else if(parameter == "zntj" ){
				self.$router.push({path:'/solution/profiledata'})
			}else if(parameter == "fxfk" ){
				self.$router.push({path:'/solution/profiledata'})
			}else if(parameter == "znxz" ){
				self.$router.push({path:'/solution/profiledata'})
			}else if(parameter == "jqxx" ){
				self.$router.push({path:'/solution/profiledata'})
			}
		}
	}
}
</script>

