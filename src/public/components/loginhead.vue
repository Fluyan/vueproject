<template>
  <div class="loginhead">
    <div class="loginlogo"></div>
    <ul>
      <li class="active">登陆</li>
      <li>注册</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less">
.loginhead{
    height: 80px;
    position: relative;
    .loginlogo{
      width: 48px;
      height: 22px;
      position: absolute;
      left: 123px;
      top: 29px;
      background: #fff;
    }
    ul{
      float: right;
      margin: 0;
      list-style: none;
      padding-right: 173px;
      li{
        width: 100px;
        height: 80px;
        line-height: 80px;
        font-size: 16px;
        color: #fff;
        //background: #1E2D56;
        text-align:center;
        float: left;
        cursor: pointer;
        &:hover{
          background: #1E2D56;
        }
        &.active{
          background: #1E2D56;
        }
      }
    }
}
</style>
