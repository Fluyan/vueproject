<template>
	<div>
		<mainhead></mainhead>
		<router-view></router-view>
		<mainfooter></mainfooter>
	</div>
</template>

<style lang="less">

</style>
<script>
import mainhead from '@/public/components/header'
import mainfooter from '@/public/components/foot'

export default {
  components:{
    mainhead,
    mainfooter
  },
  data () {
    return {
     
    }
  }
}
</script>