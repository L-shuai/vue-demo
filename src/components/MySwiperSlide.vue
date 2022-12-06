<template>
    <div>
<h2>第三方Swiper轮播图</h2>
<!-- 轮播图，并加入指示器 -->
        <Swiper :modules="modules" :pagination="{clickable:true}">
            <SwiperSlide><img src="../assets/logo.png" alt=""></SwiperSlide>
            <SwiperSlide><img src="../assets/logo.png" alt=""></SwiperSlide>
            <SwiperSlide><img src="../assets/logo.png" alt=""></SwiperSlide>
            <SwiperSlide><img src="../assets/logo.png" alt=""></SwiperSlide>
            <SwiperSlide><img src="../assets/logo.png" alt=""></SwiperSlide>

        </Swiper>
        
    </div>
</template>

<script>
//引入swiper库
import {Swiper,SwiperSlide} from 'swiper/vue';
import 'swiper/css';
//轮播图中的指示器
import {Pagination} from 'swiper'
import 'swiper/css/pagination'

    export default {
        name:"MySwiperSlide",
        data(){
        return {
            modules:[Pagination]
        }
        },
        components:{
            //引入组件
            Swiper,
            SwiperSlide
        }
    }
</script>

<style lang="scss" scoped>

</style>