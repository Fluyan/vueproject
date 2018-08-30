<template>
  <div>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(img,index) in imglist" :key="index">
      <div class="right-con" :style="{background: 'url(' + img.url + ') no-repeat center center'}">
        <h3>{{img.name}}</h3>
      </div>
    </el-carousel-item>
  </el-carousel>

  </div>

</template>
<script>
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
export default {
  data () {
    return {
      imglist:[
      {
        url:banner1,
        name:'nihao'
      },
      {
        url:banner2
      },
      {
        url:banner3
      },
      {
        url:banner4
      }
      ]
    }
  },
}
</script>
<style>
.el- {
    width:100%;
    height:500px;
}
  .el-carousel__item {
    width:100%;
    height:500px;
  }
  .right-con{
    width:100%;
    height:500px;
  }
</style>
