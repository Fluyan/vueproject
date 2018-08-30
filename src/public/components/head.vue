<template>
  <div class="head">
    <div class="headnav">
      <ul>
        <li v-for='item in nav'>
            <router-link :to="item.url">
              {{item.name}}
            </router-link>
        </li>
      </ul>
      <router-link :to="login"><span>登陆</span></router-link>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      login: '/login',
      nav:[
        {
          name:'网站首页',
          url:'/index'
        },
        {
          name:'分享',
          url:'/sure'
        },
        {
          name:'学无止境',
          url:'/study'
        },
        {
          name:'慢生活',
          url:'/life'
        },
        {
          name:'关于我',
          url:'/about'
        },
        {
          name:'时间轴',
          url:'/time'
        },
        {
          name:'留言',
          url:'/messageboard'
        }
      ]
    }
  }
}
</script>

<style lang="less">
    .head{
          height: 80px;
          line-height: 80px;
          width: 100%;
          background-color: #000;
        .headnav{
            height: 80px;
            width: 1140px;
            margin: 0 auto;
            ul{
                  float:left;
                li{
                    float: left;
                    position: relative;
                    list-style:none;
                  a{
                    color: #bdbdbd;
                    padding: 0 20px;
                    display: inline-block;
                    text-decoration:none;
                    &:hover{
                      color:#00A7EB;
                    }
                    &.router-link-active{
                      color:#00A7EB;
                    }
                  }
                }
            }
        }
        span{
          float: right;
          font-size: 16px;
          color: #fff;
          display: block;
          width: 90px;
          cursor:pointer;
          text-align:center;
          &:hover{
            color:#00A7EB;
          }
        }
    }
</style>
