<template>
    <div class="home">
        <div class = "title">Scroll Effect Example</div>
        <div class="MainBox">
            <section>
                <div class="card">
                    <div class="box">
                        <div class="imgBx">
                            <img src="../assets/ClipPathEffectAssets/img1.jpg" alt="">
                        </div>
                        <div class="contentBx">
                            <div>
                                <h2 style = "text-align: left">Post Title</h2>
                                <p style = "text-align: left">Some information from your some information from your mind some information from your mind some information from your mind</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="imgBx">
                            <img src="../assets/ClipPathEffectAssets/img2.jpg" alt="">
                        </div>
                        <div class="contentBx">
                            <div>
                                <h2 style = "text-align: left">Post Title</h2>
                                <p style = "text-align: left">Some information from your some information from your mind some information from your mind some information from your mind</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="imgBx">
                            <img src="../assets/ClipPathEffectAssets/img3.jpg" alt="">
                        </div>
                        <div class="contentBx">
                            <div>
                                <h2 style = "text-align: left">Post Title</h2>
                                <p style = "text-align: left">Some information from your some information from your mind some information from your mind some information from your mind</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="imgBx">
                            <img src="../assets/ClipPathEffectAssets/img4.jpg" alt="">
                        </div>
                        <div class="contentBx">
                            <div>
                                <h2 style = "text-align: left">Post Title</h2>
                                <p style = "text-align: left">Some information from your some information from your mind some information from your mind some information from your mind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.MainBox{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    width: 100%;
}
section .card{
    position: relative;
    width: 320px;
    height: 400px;
    margin: 20px;
    transform-style: preserve-3d;
    perspective: 1000px;
}
section .card .box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 1s ease;
}
section .card:hover .box{
    transform: rotateY(180deg);
}
section .card .box .imgBx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
section .card .box .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 2px;
}
section .card .box .contentBx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(49, 43, 32);
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
}
section .card .box .contentBx div{
    transform-style: preserve-3d;
    padding: 20px;
    background: linear-gradient(45deg, #fe0061, #ffeb3b);
    transform: translateZ(100px);
}
section .card .box .contentBx div h2{
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
}
section .card .box .contentBx div p{
    color: #fff;
    font-size: 16px;
}
</style>