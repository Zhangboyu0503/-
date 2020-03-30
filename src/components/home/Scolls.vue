<template>
    <div class="srcoll">
        <div class="scoll-contain">
            <div class="scroll-right">
                <ul :class="{animateFor}">
                    <li v-for="item in scrollList" :key="item">
                         <img src="../../assets/img/scroll.png" alt="">
                         {{item.title}}
                    </li>
                </ul>
               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            animateFor:false,
            scrollList:[
				{
					id:0,
					title:"清迈旅游落地签如何搞定？360°带你了解泰北小城清迈ssssssssss"
				},
				{
					id:1,
					title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
				},
				{
					id:2,
					title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
				},
				{
					id:3,
					title:"清迈旅游落地签如何搞定？360°带你了解泰北小城清迈"
				},
				{
					id:4,
					title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
				},
				{
					id:5,
					title:"清迈旅游落地签如何搞定？360°带你了解泰北小城清迈"
				}
			]
        }
    },
    
    mounted(){
        setInterval(this.animateSrocll,2000)
    },
    methods:{
        animateSrocll()
        {
            this.animateFor=true;
            setTimeout(()=>{
                    this.scrollList.push(this.scrollList[0]);
                    this.scrollList.shift();
                    this.animateFor=false;
            },500)

        }
    }
}
</script>

<style scoped>
.animateFor{
    transition: all .5s;
    margin-top: -.6666666rem;
}
.scoll-contain{
    background: url("http://localhost:8080/img/scroll.png");
    background-size: 100%;
    height: 1.3333333rem;
    position:relative;
}
.scroll-right{
    position: absolute;
    right: 0;
    font-size: .35rem;
    width: 8.13333333rem;
	height: 1.3333333rem;
    overflow: hidden;
}
li{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: .66666666rem;
}
</style>