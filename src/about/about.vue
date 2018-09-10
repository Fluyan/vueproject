<template>
<div>
    <mainhead></mainhead>
    <div class="aboutbanner">
      <div class="bannerinfo">
        <div class="bannermain">
          <h3>关于我们</h3>
          <h5>智能引擎大数据</h5>
          <h6>专注挖掘数据价值，服务业务领域，领跑AI大数据新时代</h6>
        </div>
        <div class="mainpic"></div>
      </div>
    </div>
    <div class="aboutus">
        <h3>关于我们</h3>
        <div class="aboutmain">
          <div class="aboutmsg">大数据与人工智能时代，数据是最宝贵的资源。如何挖掘有价值的数据、正确解读数据、让数据驱动发展，成为每一个企业提升经营效益与发展质量的关键一步。智能引擎大数据团队多年来积累了多领域丰富的技术和业务经验，我们的专家严对将利用最前沿的大数据与人工智能技术，协助金融机构及各类企业深度挖掘潜在的企业大数据价值，用大数据推动解决您的实际业务问题，助力您领跑人工智能和大数据新时代</div>
          <div class="aboutpic"><img src="../assets/about/aboutus.png"></div>
        </div>
    </div>
    <div class="teamus">
        <h3>专家团队</h3>
        <ul class="teammain">
          <li v-for="team in teams">
            <img :src='team.img'>
            <div class="teamname">
              <h4>{{team.name}}</h4>
              <p>{{team.info}}</p>
            </div>
          </li>
        </ul>
    </div>
		<mainfooter></mainfooter>
</div>
</template>
<style lang="less">
.aboutbanner{
 	  background-color: #1F2325;
    background-image: url(../assets/index/banner.png);
    background-size: cover;
    position: relative;
    width: 100%;
    height:463px;
	  min-width: 1000px;
	  .bannerinfo{
          min-width: 1000px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          zoom: 1;
          position: relative;
          color:#333;
          top:100px;
        .bannermain{
            position: absolute;
            left: 0px;
            margin-top: 78px;
            h3{
                font-size:48px;
                font-weight:normal;
                color:#fff;
                font-family:"微软雅黑";
                margin-left:18px;
            }
            h5{	
                font-weight:normal;
                color:#fff;
                font-family:"微软雅黑";
                margin-left:18px;
                width:353px;
                font-size:20px;
                line-height:28px;
                margin-top:16px;
            }
            h6{
                font-family:"微软雅黑";
                margin-left:18px;
                font-weight:normal;
                font-size:12px;
                color:rgba(255,255,255,0.6);
                line-height:17px;
                margin-top: 12px;
            }
        }
        .mainpic{
            margin-top: 8px;
            background:url(../assets/about/aboutbanner.png) no-repeat center;
            width:388px;
            height:329px;
            display: block;
            position: absolute;
            right: 0px;
        }
    }
}
.aboutus{
    min-width: 1000px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    zoom: 1;
    position: relative;
    color:#333;
    margin-top: 67px;
    h3{
      font-size:32px;
      font-weight:normal;
      color:rgba(53,65,140,1);
      line-height:45px;
      text-align: center;
      margin-bottom: 40px;
     
    }
    .aboutmain{
      background:rgba(244,247,252,1);
      height:456px;
      display: flex;
      display: -webkit-flex;
       .aboutmsg{
         padding:110px 40px;
         flex: 1;
         font-size:20px;
         color:rgba(128,142,165,1);
        line-height:28px;
       }
      .aboutpic{
        position: relative;
      }
    }
}
.teamus{
    min-width: 1000px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    zoom: 1;
    position: relative;
    color:#333;
    margin-top: 56px;
    h3{
      font-size:32px;
      font-weight:normal;
      color:rgba(53,65,140,1);
      line-height:45px;
      text-align: center;
      margin-bottom: 40px;
     
    }
    .teammain{
      height:456px;

      li{
        list-style: none;
        float: left;
        display: flex;
        display: -webkit-flex;
        width: 49.5%;
        margin-right:1%;
        margin-bottom: 16px;
        height: 200px;
        background:rgba(244,247,252,1);
        &:nth-of-type(even){
          margin-right:0px;
        }
        img{
        width: 200px;
        }
        .teamname{
          margin-top: 40px;
          margin-left:22px;
          margin-right: 20px;
          h4{
            font-size:24px;
            font-weight: normal;
            margin-bottom: 16px;
          }
          p{
            font-size:16px;
            color:rgba(128,142,165,1);
            line-height:24px;
          }
        }
      }
    }
}
</style>
<script>
import mainhead from '@/public/components/header'
import mainfooter from '@/public/components/foot'

import xj from "../assets/about/xj.png"
import wsj from "../assets/about/wsj.png"
import xl from "../assets/about/xl.png"
import wjm from "../assets/about/wjm.png"
export default {
  data(){
    return{
      teams:[
        {
          img:xj,
          name:'肖京博士',
          info:'集团首席科学家、技术研究院院长、国家千人计划专家。'
        },
        {
          img:wsj,
          name:'王少军博士',
          info:'深圳技术研究院院长、NLP首席专家。'
        },
        {
          img:xl,
          name:'徐亮博士',
          info:'深圳孔雀计划专家，资深产品总监 '
        },
        {
          img:wjm,
          name:'王建明专家',
          info:'智能推荐领域数据挖掘专家。'
        }
      ]
    }
  },
  components:{
    mainhead,
    mainfooter
  },

}
</script>
