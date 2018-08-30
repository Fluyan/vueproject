<template>
    <div class="main">
        <div class="openbtn"  @click="openMask">打开弹窗</div>
        <!-- <dialog-bar v-model="sendVal" type="confirm " title="我是标题" content="我是内容" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar> -->
        <dialog-bar :infos='infos' v-model='sendVal' @cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" @warn="clickWarn()"></dialog-bar>
        
    </div>
</template>
<script>
import dialogBar from '../public/components/dialog.vue'
export default {
   components:{
        'dialog-bar': dialogBar,
    },
    data(){
        return{
            sendVal: false,
            infos:{
                title:'我是标题',
                content:'我是内容',
                type:'warn',
                cancelText:"取消",
                dangerText:"删除",
                confirmText:'确认',
            }
        }
    },
    methods:{
        openMask(index){
            this.sendVal = true;
        },
        clickCancel(){
            console.log('点击了取消');
        },
        clickDanger(){
            console.log('这里是danger回调')
        },
        clickConfirm(){
            console.log('点击了confirm');
        }, 
        clickWarn(){
            console.log('点击了warn');
        }
    }
}
</script>
<style lang="less" scoped>
.main{
    .openbtn{
        width:120px;
        height:40px;
        background:#4baaff;
        color:#fff;
        text-align: center;
        line-height: 40px;
        font-size:14px;
        cursor:pointer;
    }
}
</style>

