<template>
  <div class="foot">
      <div class="footlog">LOGO</div>
      <ul>
        <li><img src="../../assets/index/email.png">pub_crius@pingan.com.cn</li>
        <li><img src="../../assets/index/phone.png">021-3864 9269</li>
      </ul>
      <p>Copyright@2017 平安人工智能平台.Design.ALL right reserved.ICP许可证号 粤ICP备06118290号-2</p>
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
        height:165px;
        padding:24px 0px 20px 0px;
        position: relative;
        min-width: 1000px;
        background:linear-gradient(90deg,rgba(41,58,92,1) 0%,rgba(20,30,52,1) 100%);
        .footlog{
          text-align: center;
          font-size:32px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(255,255,255,1);
          line-height:45px;
          letter-spacing:1px;
        }
        ul{
          text-align: center;
          margin:30px 0px;
          li{
            display:inline-block;
            margin-right:48px;
            color: #fff;
            &:last-child{
              margin-right:0px;
            }
            img{
              vertical-align: middle;
              margin-right: 10px;
            }
          }
        }
        p{
            font-size:14px;
            line-height:20px;
            color: #fff;
            text-align:center;
        }
    }
</style>
