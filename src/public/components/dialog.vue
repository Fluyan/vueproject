<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{infos.title}}</div>
            <div class="content">{{infos.content}}</div>
            {{message}}
            <div class="btns">
                <div v-if="infos.type!='confirm'" class="default-btn" @click="closeBtn">
                    {{infos.cancelText}}
                </div>
                <div v-if="infos.type=='confirm'" class="confirm-btn" @click="confirmBtn">
                    {{infos.confirmText}}
                </div>
                <div v-if="infos.type=='danger'" class="danger-btn" @click="dangerBtn">
                    {{infos.dangerText}}
                </div>
                <div v-if="infos.type=='warn'" class="warn-btn" @click="warnBtn">
                    {{infos.dangerText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        value:{},
        infos:Object,
        message:String
    },
    data(){
        return{
            showMask: false,
        }
    },
    methods:{
        closeMask(){
            this.showMask=false;
        },
        closeBtn(){
            this.closeMask();
            this.$emit('cancel');
        },
        confirmBtn(){
            this.closeMask();
            this.$emit('confirm');
        },
        dangerBtn(){
            this.closeMask();
            this.$emit('danger');
        },
        warnBtn(){
            this.closeMask();
            this.$emit('warn');
        }
    },
    mounted(){
        this.showMask = this.value
    },
    watch:{
        value(newVal, oldVal){
            this.showMask = newVal;
            //console.log(newVal, oldVal)
        },
        showMask(val) {
            this.$emit('input', val);
            console.log(val)
        }
    },
}
</script>
<style lang="less" scoped>
    .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 500px;
            height: 380px;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            position: relative;
            .dialog-title{
                width: 100%;
                height: 60px;
                font-size: 18px;
                color: #696969;
                font-weight: 600;
                padding: 16px 50px 0 20px;
                box-sizing: border-box;
            }
            .content{
                color: #797979;
                line-height: 26px;
                padding: 0 20px;
                box-sizing: border-box;
            }
            .inp{
                margin: 10px 0 0 20px;
                width: 200px;
                height: 40px;
                padding-left: 4px;
                border-radius: 4px;
                border: none;
                background: #efefef;
                outline: none;
                &:focus{
                    border: 1px solid #509EE3;
                }
            }
            .btns{
                width: 100%;
                height: 60px;
                // line-height: 60px;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: right;
                padding: 0 16px;
                box-sizing: border-box;
                & > div{
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 14px;
                    color: #ffffff;
                    background: #f1f1f1;
                    border-radius: 8px;
                    margin-right: 12px;
                    cursor: pointer;
                }
                .default-btn{
                    color: #787878;
                    &:hover{
                        color: #509EE3; 
                    }
                }
                .danger-btn{
                    background: #EF8C8C;
                    &:hover{
                        background: rgb(224, 135, 135);
                    }
                    &:active{
                        background: #EF8C8C;
                    }
                }
                .confirm-btn{
                    color: #ffffff;
                    background: #509EE3;
                    &:hover{
                        background: #6FB0EB;
                    }
                }
                .warn-btn{
                    color: #ffffff;
                    background: #ffcc00;
                    &:hover{
                        background: #ffcccc;
                    }
                }
            }
            .close-btn{
                position: absolute;
                top: 16px;
                right: 16px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
                &:hover{
                    font-weight: 600;
                }
            }
        }
    }
</style>
