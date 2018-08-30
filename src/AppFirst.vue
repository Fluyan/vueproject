<template>
	<div>
		<mainhead></mainhead>
		<Slidebanner></Slidebanner>
		<helloworld></helloworld>
		<!--<Tab></Tab>-->
		<!--<Loading></Loading>-->
		<mainfooter></mainfooter>
	</div>
</template>

<script>
import mainhead from '@/public/components/head'
import helloworld from '@/index/HelloWorld'
import Slidebanner from '@/index/slidebanner'

//import Loading from '@/public/components/loading'
import Tab from '@/public/components/tab'
import mainfooter from '@/public/components/foot'

export default {
  components:{
    mainhead,
    helloworld,
    Slidebanner,
    //Loading,
    Tab,
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
