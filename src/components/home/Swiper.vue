<template>
    <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
                   <swiper-slide><img src="../../assets/img/swiper1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../../assets/img/swiper2.png" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
             swiperOptions: {
             pagination: {
             el: '.swiper-pagination'
          }
        }
        }
    }
}
</script>


<style  scoped>
.swiper{
    width: 100%;
    height: 3.2rem;
}
.swiper img{
    width: 100%;
    height: 3.2rem;
}
.swiper-pagination >>> .swiper-pagination-bullet-active{
	background: orange;
}
.swiper-pagination{
    margin-top: .2rem;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 4px;
}
</style>