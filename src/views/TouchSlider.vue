<template>
    <!-- WE ARE USING SWIPER.JS -->
    <div class="home">
        <div class = "title">Infinitive Touch Slider Example</div>
        <div class="MainBox">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo1.jpg"></div>
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo2.jpg"></div>
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo3.jpg"></div>
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo4.jpg"></div>
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo5.jpg"></div>
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo6.jpg"></div>
                <div class="swiper-slide"><img src="../assets/TouchSliderAssets/photo7.jpg"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css'

export default {
    name: 'Home',
    mounted(){
        var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        loop: true
        });
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .MainBox {
        min-height: 90vh;
        background: #fff;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        background-color: rgb(41, 40, 40);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-container {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 430px;
        background: #000;
    }
    .swiper-slide img{
        width: 300px;
        height: 430px;       
    }
</style>