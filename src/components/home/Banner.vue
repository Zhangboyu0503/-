<template>
       <div class="banner">
           <transition
                 enter-active-class="bounceInLeft"
                 leave-active-class="bounceOutLeft"
           >
                <div class="banner-black animated" v-show="toshow"></div>
           </transition>
           <div class="banner-head">
               <div class="banner-top">
                   <div 
                   class="top-left"
                   @click="toCity"
                   >
                       {{cityName}}
                       <i class="iconfont">&#xe603;</i>
                   </div>
                   <div class="top-search">
                       <i class="iconfont">&#xe60d;</i>
                       泰国
                   </div>
                   <div class="top-right">
                       <img src="../../assets/img/show.png" alt="" @click="tanblack">
                   </div>
               </div>
               <div class="banner-swiper">
                   <swiper ref="mySwiper" :options="swiperOptions">
                   <swiper-slide><img src="../../assets/img/banner1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../../assets/img/banner2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../../assets/img/banner3.png" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
               </div>
           </div>
       </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
   data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
        },
        toshow:false
      }
    },
    methods:{
        tanblack()
        {
            this.toshow=!this.toshow
        },
        toCity()
        {
            this.$router.push({
                path:'/city'
            })
        }
    },
    computed:{
        ...mapState(['cityName'])
    }

}
</script>
<style scoped>
.banner-black{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6.666666rem;
    z-index: 999;
    background-color: black;
}
.banner-header{
	background: #f5f5f5;
	width: 100%;
	height: 5.6rem;
	position: relative;
}
.banner-top{
	position: absolute;
	left:0;
	top:.5rem;
	z-index: 2;
	height: .8rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.top-left{
	padding:.2rem .4rem;
	color:#fff;
	font-size:.4266666rem;
}
.top-search{
	flex:1;
	color:#333;
	background: #fff;
	border-radius: .1rem;
	font-size:.3733333rem;
	padding:.2rem .2rem;
}
.top-right{
	padding:.2rem .4rem;
}
.top-right img{
	height: .5333333rem;
	width: .5333333rem;
}

.banner-swiper{
	width: 100%;
	height: 100%;
}
.banner-swiper img{
	width: 100%;
	height: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet-active{
	background: orange;
}
</style>