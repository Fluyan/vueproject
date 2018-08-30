<template>
<div>
	<mainhead></mainhead>
	<div class="contain">
		<p class='count'>{{ life }}</p>
		<p>
			<button @click="add">+</button>
		</p>
	</div>
	<mainmask ></mainmask>
	<mainfooter></mainfooter>
</div>
</template>
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
	button{
		width:100px;
		height:20px;
	}
}
</style>
<script>
import mainhead from '@/public/components/head'
import mainmask from './main.vue'
import mainfooter from '@/public/components/foot'

export default {
	components:{
		mainhead,
		mainmask,
		mainfooter
	},
	data () {
		return {
		}
	},
	computed: {
		life () {
			return this.$store.state.life
		}
	},
	methods: {
		add () {
			this.$store.commit('add')
		}
	},
}
</script>
