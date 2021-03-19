<template>
    <div class="home">
        <div class = "title">Image Hover Effect Example</div>
        <div class="container">
            <div class="card">
                <div class="imgBx">
                    <img src="../assets/ImageHoverEffectAssets/photo1.jpg">
                </div>
                <div class="contextBx">
                    <div class="content">
                        <h3>Post One</h3>
                        <p>Some information</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="imgBx">
                    <img src="../assets/ImageHoverEffectAssets/photo2.jpg">
                </div>
                <div class="contextBx">
                    <div class="content">
                        <h3>Post Two</h3>
                        <p>Some information</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="imgBx">
                    <img src="../assets/ImageHoverEffectAssets/photo3.jpg">
                </div>
                <div class="contextBx">
                    <div class="content">
                        <h3>Post Three</h3>
                        <p>Some information</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="imgBx">
                    <img src="../assets/ImageHoverEffectAssets/photo4.jpg">
                </div>
                <div class="contextBx">
                    <div class="content">
                        <h3>Post Four</h3>
                        <p>Some information</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="imgBx">
                    <img src="../assets/ImageHoverEffectAssets/photo5.jpg">
                </div>
                <div class="contextBx">
                    <div class="content">
                        <h3>Post Five</h3>
                        <p>Some information</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="imgBx">
                    <img src="../assets/ImageHoverEffectAssets/photo6.jpg">
                </div>
                <div class="contextBx">
                    <div class="content">
                        <h3>Post Six</h3>
                        <p>Some information</p>
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

<style>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.home{
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: #222;
}
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-width: 1100px;
}
.container .card{
    position: relative;
    width: 300px;
    height: 300px;
    margin: 25px;
    overflow: hidden;
}
.container .card .imgBx,
.container .card .contextBx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container .card .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    object-fit: cover;  
}
.container .card .contextBx::before{
    content:'';
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
    transform-origin: right;
    transition-delay: 0.4s;
}
.container .card:hover .contextBx::before{
    transform: scaleX(1);
    transition: transform 0.4s ease-in-out;
    transform-origin: left;
}
.container .card .contextBx{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container .card .contextBx .content{
    position: relative;
    padding: 30px;
    z-index: 1;
    transition: 0.4s;
    transform:translateX(-300px);
    transition-delay: 0s;
}
.container .card:hover .contextBx .content{
    transform: translateX(0px);
    transition-delay: 0.4s;
}
.container .card .contextBx .content h3{
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing:  1px;
}
.container .card .contextBx .content p{
    font-size: 1em;
    line-height: 1.4em;
    font-weight: 300;;
}
</style>