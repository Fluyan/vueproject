<template>
    <div class="menuhead">
        <div class="menumain">
            <div class="menulogo">LOGO</div>
            <ul class="indexnav">
                <li class="indexli"><router-link to="/index">首页</router-link></li>
                <li class="indexli">
                    <a>产品中心</a>
                    <ul class="produce">
                        <router-link tag="li" v-for="produce in producelist"  :to="produce.url">{{produce.name}}</router-link> 
                    </ul>
                </li>
                <li class="indexli"><a>AI学院</a></li>
                <li class="indexli"><a>AI实验室</a></li>
                <li class="indexli">
                    <a>解决方案</a>
                    <ul class="solution">
                        <router-link tag="li" v-for="solution in solutionlist"  :to="solution.url">{{solution.name}}</router-link> 
                    </ul>
                </li>
                <li class="indexli">
                    <a>服务支持</a>
                    <ul class="service">
                        <router-link tag="li" v-for="service in servicelist"  :to="service.url">{{service.name}}</router-link> 
                    </ul>
                </li>
                <li class="indexli"><router-link to="/about">关于我们</router-link></li>
            </ul> 
            <div class="userbox">
                <span><a>控制中心</a></span>
                <span><router-link to="/login">登陆</router-link></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             producelist:[{
                    name:'画像分析',
                    url:'/productcenter/portraitintroduce',
                },{
                    name:'智能推荐',
                    url:'/productcenter/recommendintroduce'
                },{
                    name:'风险防控',
                    url:'/productcenter/riskintroduce'
                },{
                    name:'机器学习',
                    url:'/productcenter/technologyintroduce'
                },{
                    name:'智能选址',
                    url:'/productcenter/locateintroduce'
                }
            ],
            solutionlist:[{
                    name:'智能营销',
                    url:'/solution/intelligent',
                },{
                    name:'风险防控',
                    url:'/solution/riskcontrol'
                }
            ],
            servicelist:[{
                    name:'产品介绍',
                    url:'/service/productintroduction',
                },{
                    name:'使用手册',
                    url:'/service/handbook'
                },{
                    name:'专家服务',
                    url:'/service/expertservice'
                },{
                    name:'案例咨询',
                    url:'/service/caseconsultation'
                }
            ],
        }
    }
}
</script>
<style lang="less">
   .menuhead{
       position: absolute;
       height: 80px;
       max-width:100%;
       z-index: 5;
       top: 0;
       left: 0;
       right: 0;
       .menumain{
            min-width: 1000px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            zoom: 1;
            position: relative;
            color:#fff;
            .menulogo{
                font-size: 18px;
                line-height: 80px;
                position: absolute;
                top: 0;
            }
            .indexnav{
                left: 80px;
                position: absolute;
                top: 0;
                .indexli{
                    float: left;
                    list-style: none;
                    width:100px;
                    height:80px;
                    line-height:80px;
                    text-align: center;
                    cursor: pointer;
                    a{
                        color:#fff;
                        text-decoration: none;
                    }
                    a.router-link-active{
                        width: 100px;
                        height: 44px;
                        border-radius: 22px;
                        display: inline-block;
                        line-height: 44px;
                        background-color: rgba(82,108,242,0.1);
                        text-decoration: none;
                    }
                    ul{
                        position: absolute;
                        width: 180px;
                        margin-left: -40px;
                        height:0px;
                        transition: all 0.35s;
                        background: #fcc;
                        overflow:hidden;
                        box-shadow:0px 8px 12px 0px rgba(0,0,0,0.17);
                        li{
                            display: block;
                            line-height: 40px;
                            text-align: center;
                            background: #fff;
                            color:rgba(22,33,61,0.85);
                            &:hover{
                                background:rgba(41,57,98,1);
                                color:#fff;
                            }
                        }
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
                        .produce{
                            height: 200px;
                            
                        }
                        .solution{
                            height: 80px;
                            
                        }
                        .service{
                            height: 160px;
                           
                        }
                    }
                }
            }
            .userbox{
                position: absolute;
                right: 0;
                top: 0;
                span{
                    text-align: center;
                    width:100px;
                    height:80px;
                    line-height:80px;
                    display: inline-block;
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
                }
            }
       } 
   }
</style>