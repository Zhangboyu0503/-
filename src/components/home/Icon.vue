<template>
    <div class="Icons">
        <ul>
            <li v-for="item in icondata" :key="item">
                <img :src='item.imgUrl' alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
           icondata:[
				{
					id:0,
					imgUrl:'img/icons1.png',
					title:"国内游"
				},
				{
					id:1,
					imgUrl:'img/icons2.png',
					title:"出境游"
				},
				{
					id:2,
					imgUrl:'img/icons3.png',
					title:"周边游"
				},
				{
					id:3,
					imgUrl:'img/icons4.gif',
					title:"当地玩乐"
				},
				{
					id:4,
					imgUrl:'img/icons5.png',
					title:"活动赛事"
				},
				{
					id:5,
					imgUrl:'img/icons6.png',
					title:"摄影游"
				},
				{
					id:6,
					imgUrl:'img/icons7.png',
					title:"亲子游"
				},
				{
					id:7,
					imgUrl:'img/icons8.png',
					title:"户外游"
				},
				{
					id:8,
					imgUrl:'img/icons9.png',
					title:"主题游"
				},
				{
					id:9,
					imgUrl:'img/icons1.png',
					title:"定制游"
				}
			]
        }
    }
}
</script>
<style  scoped>
.Icons{
    padding-bottom: .3rem;
    border-bottom: 1px solid #eee;
}
ul{
    overflow: hidden;
}
ul li{
    width: 20%;
    float: left;
}
ul li img{
    padding-top: 0.3rem;
    width: 1.0666666rem;
    height: 1.066666rem;
    margin: 0 auto;
    display: block;

}
ul li p{
    padding-top:.1rem;
    padding-bottom: .1rem;
    font-size:.373333rem;
    text-align: center;
}
</style>