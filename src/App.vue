<template>
  <div id="app">
    <router-view></router-view>
    <Permission v-show='!isallowed'></Permission>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Permission from './public/components/permission'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Permission
  },
  computed:mapState([
    'isallowed'
  ])
}
</script>

<style>
*{
    margin:0;padding:0
}

</style>
