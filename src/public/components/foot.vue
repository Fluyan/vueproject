<template>
  <div class="foot">
      <p>这是底部footer组件，请多多指教</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
    .foot{
        width:100%;
        height:40px;
        line-height:40px;
        background:#111525;
        p{
            font-size:16px;
            color:#fcc;
            text-align:center;
        }
    }
</style>
