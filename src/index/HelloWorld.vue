<template>
  <div>
  	<div class="contain">
        <p class='count'>{{ count }}</p>
		<p>
			<button @click="increment">+</button>
		</p>
  	</div>
	<div class="tab">
		<ul>
			<li v-for='(item,index) in navs' :key="item" :class='{activenav:active == index}' @click="active=index">
				{{item.name}}
			</li>
		</ul>
		<div v-for='(item,index) in navs' :key="item" class='infos' :class='{activeshow:active == index}'>
			{{item.infos}}
		</div>
	</div>
	<div class="message">这里是一段文字需要点击按钮<span @click="openMask">点击查看详情</span>
		 <dialog-bar :message="msg" :infos='infos' v-model='sendVal' @cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" @warn="clickWarn()"></dialog-bar>
	</div>
	<div class="creatbtn">新建画像表</div>
	<div class="profilemask">
		<div class="choose">
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
import dialogBar from "../public/components/dialog.vue"
export default {
	components:{
		'dialog-bar': dialogBar,
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			active:0,
			sendVal: false,
            infos:{
                title:'我是标题',
                content:'我是内容',
                type:'danger',
                cancelText:"取消",
                dangerText:"删除",
                confirmText:'确认',
            },
			navs:[
				{
					name:'壹',
					infos:'壹的内容'
				},
				{
					name:'贰',
					infos:'贰的内容'
				},
				{
					name:'叁',
					infos:'叁的内容'
				},
			],
			course:[
				{
					"coursemain":'da课程1',
					"courselist":["课程列表1","课程列表2"]
				}
			]
		}
	},
	computed: {
		count () {
			return this.$store.state.count
		}
	},
	methods: {
		increment () {
			this.$store.commit('increment')
		},
		 openMask(index){
            this.sendVal = true;
        },
        clickCancel(){
            console.log('点击了取消');
        },
        clickDanger(){
            console.log('这里是danger回调')
        },
        clickConfirm(){
            console.log('点击了confirm');
        }, 
        clickWarn(){
            console.log('点击了warn');
        }
	},
}
</script>

<style lang="less">
.contain{
	text-align:center;
	font-size:20px;
	display:block;
	img{
		margin-top:10px;
	}
	marquee{
		width:300px;
		background:#fcc;
		line-height:30px;
		height:30px;
		margin:0 auto;
		text-align:left;
		span{
			display:inline-block;
			margin-right:30px;
		}
	}
    .count{
        width:100px;
        height:50px;
        margin:0 auto;
        background:#fcc
	}
}
.tab{
	width:500px;
	margin:0 auto;
	li{
		list-style: none;
		display:inline-block;
		width: 100px;
		height: 50px;
		background: #e0e0e0;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
		&:hover{
			background: #fcc;
		}
	}
	.infos{
		width: 500px;
		height: 300px;
		background: #ccc;
		font-size:20px;
		color:#fff;
		display: none;
	}
	.activenav{
		background: #fcc;
	}
	.activeshow{
		display: block
	}
}
.message{
	line-height: 40px;
	font-size:14px;
	span{
		width:120px;
        height:40px;
        background:#4baaff;
        color:#fff;
        text-align: center;
        line-height: 40px;
        font-size:14px;
		cursor:pointer;
		display: inline-block;
	}
}
</style>
