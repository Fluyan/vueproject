<template>
	<div class="loginbg">
		<loginhead></loginhead>
		<div class="loagin">
			<div class="logininfo" >
				<div class="loginmsg">
					<div class="loginline"></div>
					<div class="loginpoint"></div>
					<h3>克瑞斯</h3>
					<h5>提供基于大数据技术的一站式机器学习解决方案</h5>
					<h6>全方位刻画用户特征，预测客户行为和需求，常用脸谱和分裂投资倾向分、风险偏好等，可实时调用。</h6>
					<span class="loginpic"></span>
				</div>
			</div>
			<div class="loginbox">
				<div class="loginboxlogo">
				</div>
				<div class="username">
					<div class="userinput" v-bind:class="{userfocus:isUserfocus}">
						<label>账号</label>
						<input type="text" v-model="username" class="userbox" @focus="userfocus" @blur="userlosefocus($event)">
						<p class="userwarn" v-show="isUserwarn">请输入账号</p>
					</div>
					<div class="psdinput" v-bind:class="{psdfocus:isPsdfocus}">
						<label>密码</label>
						<input type="password" v-model="password" class="password" @focus="psdfocus" @blur="psdlosefocus($event)">
						<div class="psdwarn" v-show="isPsdwarn">请输入密码</div>
					</div>
					<div class="loginbtn" @click="login">登陆</div>
					<h6>还没有账号？<span>免费注册</span></h6>
				</div>
			</div>
		</div>
		
	</div>

</template>
<style lang="less">
.loginbg{
		background-color: #1F2325;
    background-image: url(../assets/login/loginbg.png);
		background-size: cover;
		position: absolute;
		width: 100%;
		height: 100%;
		min-width:1000px;
		overflow: hidden;
	.loagin{
    position: relative;
    width: 1000px;
		margin: auto;
		height:80%;
    overflow: hidden;
		background:rgba(255,255,255,1);
		margin-top: 20px;
		.logininfo{
			width:480px;
			height:100%;
			background:rgba(26,40,77,1);
			float: left;
			box-sizing: border-box;
			.loginmsg{
				padding: 12.6% 8.7% 7.4% 12.5%;
				position: relative;
				.loginline{
					width:0px;
					height:104px;
					border:1px solid rgba(255,255,255,1);
					position: absolute;
				}
				.loginpoint{
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
				.loginpic{
					margin-top: 8px;
					background:url(../assets/login/loginpic.png) no-repeat center;
					width:325px;
					height:273px;
					display: block;
				}
			}
		}
		.loginbox{
			width: 360px;
			height: 100%;
			float: right;
			padding:0 80px;
			position: relative;
			.loginboxlogo{
				width: 100px;
				height: 100px;
				background: rgba(82,108,242,1);
				margin:0 auto;
				margin-top: 68px;
				margin-bottom: 50px;
			}
			.userinput{
				position: relative;
				label{
					position: absolute;
					top: 5px;
					color: rgba(0,0,0,0.85);
				}
				input{
					outline:none;
					width:350px;
					height:30px;
					font-size:16px;
					line-height:30px;
					color:#333;
					border:none;
					border-bottom:1px solid rgba(0,0,0,0.3);
					margin-bottom: 50px;
				}
				.userwarn{
					position: absolute;
					top:35px;
					height: 20px;
					line-height: 20px;
					color:#D50000;
					font-size:12px;
					transition: .2s ease-in-out all;
				}
			}
			.userfocus{
				label{
					top: -18px;
					font-size: 12px;
					-webkit-transition: .2s ease-in-out all;
					-o-transition: .2s ease-in-out all;
					transition: .2s ease-in-out all;
					color: rgba(0,0,0,0.65);
				}
				input{
					border-bottom:1px solid rgba(96,137,216,0.5);
				}
			}
			.psdinput{
				position: relative;
				label{
					position: absolute;
					top: 5px;
					color: rgba(0,0,0,0.85);
				}
				input{
					outline:none;
					width:350px;
					height:30px;
					font-size:16px;
					line-height: 30px;
					color:#333;
					border:none;
					border-bottom:1px solid rgba(0,0,0,0.3);
					margin-bottom: 10px;
				}
				.psdwarn{
					position: absolute;
					top:40px;
					height: 20px;
					line-height: 20px;
					color:#D50000;
					font-size:12px;
					transition: .2s ease-in-out all;
				}
			}
			.psdfocus{
				label{
					top: -18px;
					font-size: 12px;
					-webkit-transition: .2s ease-in-out all;
					-o-transition: .2s ease-in-out all;
					transition: .2s ease-in-out all;
					color: rgba(0,0,0,0.65);
				}
				input{
					border-bottom:1px solid rgba(96,137,216,0.5);
				}
			}		
			.loginbtn{
				width:100%;
				height:48px;
				background:rgba(82,108,242,1);
				box-shadow:0px 15px 20px 0px rgba(96,137,216,0.5);
				border-radius:8px;
				text-align:center;
				line-height: 48px;
				color: #fff;
				margin-top: 30px;
				cursor: pointer;
			}
			h6{
					font-size: 16px;
					color: rgba(0, 0, 0, 0.85);
					font-weight: normal;
					text-align: center;
					margin-top: 40px;
					span{
						color:#6089D8
					}
			}
			
		}
	}
}
	
</style>
<script>
import loginhead from '@/public/components/loginhead'

import mainfooter from '@/public/components/foot'

export default {
  components:{
    loginhead,
    mainfooter
  },
  data () {
    return {
    	username:'',
			password:'',
			isUserwarn:false,
			isPsdwarn:false,
			isUserfocus:false,
			isPsdfocus:false
    }
  },
  methods:{
		userfocus:function(){
				if(this.username==""){
					this.isUserfocus = true
				}
				this.isUserwarn = false		
		},
		userlosefocus:function(){
				if(this.username==""){
					this.isUserfocus = false
				}
		},
		psdfocus:function(){
				if(this.password==""){
					this.isPsdfocus = true
				}
				this.isPsdwarn = false
		},
		psdlosefocus:function(){
			if(this.password==""){
					this.isPsdfocus = false
				}
		},
  	login:function(){
  		var self = this;
  		if(this.username !== "123"){
				this.isUserwarn = true
			}else{
				this.isUserwarn = false
			}
			if(this.password !== "456"){
				this.isPsdwarn = true
			}else{
				this.isPsdwarn = false
			}
			if(this.username == "123"&&this.password == "456"){
  			this.$router.push({
  			path:'/'
  			})
  		}
  	}
  }
}
</script>
