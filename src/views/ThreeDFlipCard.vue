<template>
    <!-- USING vue-icon FOR ICON. Npm - https://www.npmjs.com/package/vue-icon | all icons here:  https://qinshenxue.github.io/vue-icon/--> 
    <div class="home">
        <div class = "title">3D Flip Card Example</div>
        <div class="MainBox">
            <div class="cardBlock">
                <div class="imgBox">
                    <img src="../assets/ThreeDFlipCardAssets/img1.jpg" alt="">
                    <img src="../assets/ThreeDFlipCardAssets/img1.jpg" alt="">
                </div>
                <div class="details">
                    <div class="content">
                        <h2>Someone Famous<br><span>For example - You</span></h2>
                        <div class="social-icons">
                            <v-icon name="facebook"></v-icon>
                            <v-icon name="twitter"></v-icon>
                            <v-icon name="linkedin"></v-icon>
                            <v-icon name="instagram"></v-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
    },
}
</script>

<style scoped>
    svg{
        width: 50px;
        color: white;
        padding: 8px;
        border: 5px solid white;
        transition: 0.4s;
    }
    svg:hover{
        background-color: red;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .MainBox{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
        background: #fbe9e7;
    }
    .cardBlock{
        position: relative;
        width: 300px;
        height: 400px;
        background: #fff;
        transform-style: preserve-3d;
        transform: perspective(1000px);
        box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
        transition: 1s;
    }
    .cardBlock:hover{
        transform: translateX(50%);
    }
    .cardBlock .imgBox{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        transform-origin: left;
        transform-style: preserve-3d;
        background: #000;
        transition: 1s;
        box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
    }
    .cardBlock:hover .imgBox{
        transform: rotateY(-180deg);
    }
    .cardBlock .imgBox img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-style: preserve-3d;
        backface-visibility: hidden;
    }
    .cardBlock .imgBox img:nth-child(2){
        transform: rotateY(180deg);
    }
    .cardBlock .details{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cardBlock .details .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .cardBlock .details .content h2{
        text-align: center;
        color: black;
        font-weight: 700;
        line-height: 1em;
    }
    .cardBlock .details .content h2 span{
        color: red;
        font-size: 0.8em;
    }
    .cardBlock .details .content .social-icons{
        position: relative;
        display: flex;
        margin-top: 10px;
        background-color: #333;
    }
</style>