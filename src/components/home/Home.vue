<template>
    <div class="home">
        <Banner></Banner>
        <Icon></Icon>
        <Tabs></Tabs>
        <Scolls></Scolls>
        <Swiper></Swiper>
        <Spike :spikeList='spikeList'></Spike>
        <like :likeList='likeList'></like>
        <Footer></Footer>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Banner from './Banner'
import Icon from './Icon'
import Tabs from './Tabs'
import Scolls from './Scolls'
import Swiper from './Swiper'
import Spike from './Spike'
import Like from './Like'
import Footer from './Footer'
export default {
    components:{
        Banner,
        Icon,
        Tabs,
        Scolls,
        Swiper,
        Spike,
        Like,
        Footer
    },
    data()
    {
        return{
            spikeList:[],
            likeList:[],
            changeCity:''
        }
    },
    computed:{
        ...mapState(['cityName'])
    },
    mounted()
    {
        this.http()
        this.changeCity=this.cityName
    },
    methods:{
        http(){
            let that =this;
            this.axios.get('http://localhost:8080/api/dataHome.json')
            .then((res)=>{
                let data = res.data.data;
                data.forEach((item,index) => {
                    if(item.city==that.cityName)
                    {
                        that.spikeList=item.spikeList;
                        that.likeList=item.likeList;
                    }
                });
            })
            
        }
    },
    activated(){
        if(this.changeCity!=this.cityName)
        {
            this.http();
            this.changeCity=this.cityName
        }
    }
}
</script>

<style scoped>
.home{
	overflow: hidden;
}	
</style>