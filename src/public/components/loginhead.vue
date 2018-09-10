<template>
  <div class="loginhead">
    <div class="loginlogo">LOGO</div>
    <ul>
      <li class="active"><a>登陆</a></li>
      <li><a>注册</a></li>
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
      font-size: 18px;
      color: #fff;
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
        a{
            text-decoration: none;
            color: #fff;
        }
        &:hover{
            a{
                width: 100px;
                height: 44px;
                border-radius: 22px;
                display: inline-block;
                line-height: 44px;
                background-color: rgba(82,108,242,0.1);
                text-decoration: none;
            }
        }
        &.active{
          a{
                width: 100px;
                height: 44px;
                border-radius: 22px;
                display: inline-block;
                line-height: 44px;
                background-color: rgba(82,108,242,0.1);
                text-decoration: none;
            }
        }
      }
    }
}
</style>
