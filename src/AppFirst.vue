<template>
	<div>
		<mainhead></mainhead>
    <mainbanner></mainbanner>
    <produce></produce>
    <business></business>
    <custom></custom>
    <advantage></advantage>
		<mainfooter></mainfooter>
	</div>
</template>

<script>
import mainhead from '@/public/components/header'
import mainbanner from '@/public/components/mainbanner'
import produce from '@/index/produce'
import business from '@/index/business'
import custom from '@/index/custom'
import advantage from '@/index/advantage'
//import helloworld from '@/index/HelloWorld'
//import Slidebanner from '@/index/slidebanner'

//import Loading from '@/public/components/loading'
//import Tab from '@/public/components/tab'
import mainfooter from '@/public/components/foot'

export default {
  components:{
    mainhead,
    mainbanner,
    produce,
    business,
    custom,
    advantage,
    //helloworld,
    //Slidebanner,
    //Loading,
    //Tab,
    mainfooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
}
</style>
