<template>
    <div class="mainbanner">
        <div class="maininfo" >
            <div class="mainmsg">
                <div class="mainline"></div>
                <div class="mainpoint"></div>
                <h3>克瑞斯</h3>
                <h5>提供基于大数据技术的一站式机器学习解决方案</h5>
                <h6>全方位刻画用户特征，预测客户行为和需求，常用脸谱和分裂投资倾向分、风险偏好等，可实时调用。</h6>
                <div class="lookmorebtn">查看更多</div>
            </div>
            <div class="mainpic"></div>
        </div>
        <div class="maincrius">
            <h3>克瑞斯</h3>
            <h5>打破数据流图壁垒，提供实时及离线双通道项目应用解决方案，为合作方提供结果输出通道，可定制化输出项目结果</h5>
            <h6>打破数据流图壁垒，提供实时及离线双通道项目应用解决方案，为合作方提供结果输出通道，可定制化输出项目结果</h6>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
        }
    }
}
</script>
<style lang="less">
.mainbanner{
    background-color: #1F2325;
    background-image: url(../../assets/index/banner.png);
    background-size: cover;
    position: relative;
    width: 100%;
    height: 710px;
    min-width: 1000px;
    .maininfo{
        min-width: 900px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        position: relative;
        color:#333;
        background: #fcc;
        top:130px;
        .mainmsg{
            float: left;
            margin-top: 78px;
            .mainline{
                width:0px;
                height:104px;
                border:1px solid rgba(255,255,255,1);
                position: absolute;
            }
            .mainpoint{
                width:8px;
                height:8px;
                background:rgba(255,255,255,1);
                border-radius: 4px;
                position: absolute;
                margin-top: 150px;
                margin-left: -4px;
            }
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
                height:56px;
                font-size:20px;
                line-height:28px;
                margin-top:16px;
            }
            h6{
                font-family:"微软雅黑";
                margin-left:18px;
                font-weight:normal;
                width:290px;
                font-size:12px;
                color:rgba(255,255,255,0.6);
                line-height:17px;
                margin-top: 8px;
            }
            .lookmorebtn{
                width:118px;
                height:36px;
                background:rgba(82,108,242,1);
                border-radius:18px;
                text-align: center;
                line-height: 36px;
                color: #fff;
                cursor: pointer;
                margin-top: 34px;
                margin-left: 30px;
                &:hover{
                    background:rgba(122,144,252,1);
                }
            }
            
        }
        .mainpic{
            float: right;
            margin-top: 8px;
            background:url(../../assets/index/bannerpic.png) no-repeat center;
            width:525px;
            height:442px;
            display: block;
        }
    }
    .maincrius{
        width:968px;
        height:261px;
        background:rgba(255,255,255,1);
        box-shadow:0px 20px 20px 0px rgba(230,225,231,0.66);
        position: relative;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        top:612px;
        h3{
            text-align: center;
            font-weight: normal;
            font-size: 32px;
            color:rgba(0,0,0,0.85);
            padding-top: 40px;
            margin-bottom: 24px;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            
        }
        h5{
            width:544px;
            height:56px;
            font-size:20px;
            color:rgba(0,0,0,0.54);
            line-height:28px;
            text-align: center;
            font-weight: normal;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top:109px;
        }
        h6{
            width:528px;
            height:40px;
            font-size:14px;
            color:rgba(0,0,0,0.34);
            line-height:20px;
            text-align: center;
            font-weight: normal;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top:181px;
        }
    }
}
</style>