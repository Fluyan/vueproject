<template>

    <div class="permission">
        <p @click="allow">暂时不能登录</p>
    </div>
</template>
<style lang="less">
    .permission{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.5);
        left:0;
        top:0;
        z-index:9999;
        p{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            padding:20px 40px;
            background: #fff;
        }
    }
</style>
<script>
import { mapMutations } from 'vuex';
export default {
    methods:mapMutations([
        'allow'
    ])
}
</script>
