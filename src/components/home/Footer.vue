<template>
    <footer>
        <a href="">
            <img src="../../assets/img/footer1.png" alt="">
            <span>首页</span>
        </a>
        <a href="">
            <img src="../../assets/img/footer2.png" alt="">
            <span>订单</span>
        </a>
        <a href="">
            <img src="../../assets/img/footer3.png" alt="">
            <span>个人中心</span>
        </a>
    </footer>
</template>

<style scoped>
footer{
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.466666rem;
    z-index: 99999;
    background: #fff;
}
a{
    flex:1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
img{
    padding-top: .12rem;
    width: .72rem;
	height: .72rem;
}
span{
    display: block;
    font-size:.35rem;
	margin-top:.1rem;
}

</style>