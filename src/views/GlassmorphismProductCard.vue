<template>
    <div class="home">
        <div class = "title">Glassmorphism Product Card Example</div>
        <div class="MainBox">
            <section class = "sectionG">
                <div class="container">
                    <div class="card">
                        <div class="imgBx">
                            <img id = 'image' src="../assets/GlassmorphismProductCardAssets/photo1.png" alt="">
                            <h2>Nike Shoes</h2>
                        </div>
                        <div class="content">
                            <div class="size">
                                <h3>Size: </h3>
                                    <span data-size = '1' class="S-S">7</span>
                                    <span data-size = '1.2' class="S-S">8</span>
                                    <span data-size = '1.3' class="S-S">9</span>
                                    <span data-size = '1.4' class="S-S">10</span>
                            </div>
                            <div class="color">
                                <h3>Color: </h3>
                                    <span id="color1"></span>
                                    <span id="color2"></span>
                                    <span id="color3"></span>
                                    <span id="color4"></span>
                            </div>
                            <a href="">Buy now</a>
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
    data(){
        return{
            color: 'red'
        }
    },
    mounted(){
        var image = document.getElementById('image');
        var Size = document.querySelectorAll('.S-S');
        var card = document.querySelector('.card');
        document.getElementById('color1').addEventListener('click', function(){
            image.style.filter = "hue-rotate(0deg)"
        })
        document.getElementById('color2').addEventListener('click', function(){
            image.style.filter = "hue-rotate(90deg)"
        })
        document.getElementById('color3').addEventListener('click', function(){
            image.style.filter = "hue-rotate(260deg)"
        })
        document.getElementById('color4').addEventListener('click', function(){
            image.style.filter = "hue-rotate(300deg)"
        })
        card.addEventListener('mouseleave', function(){
            image.style.transform = 'rotateY(180deg)'
        })
        for(let i = 0; i < Size.length; i++){
            Size[i].addEventListener('click', function(){
                image.style.transform = `scale(${Size[i].dataset.size}) translate(-20px,-40px) rotate(-20deg) rotateY(180deg)`
            })
        }
        
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.sectionG{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #232323;
    overflow: hidden;
    padding: 100px 20px;
    box-sizing: border-box;
}
.sectionG::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ef3b36;
    clip-path: circle(53% at 100% -20%);
}
.sectionG::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #47aafa;
    clip-path: circle(35% at 0% 100%);
}
.container{
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.container .card{
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(255,255,255,0.05);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    backdrop-filter: blur(15px);
}
.container .card .imgBx{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    transition: 0.5s ease-in-out
}
.container .card:hover .imgBx{
    transform: translateY(-100px);
}
.container .card .imgBx img{
    transform: rotateY(180deg);
    max-width: 100%;
    margin: 0 0 20px;
    transition: 0.5s ease-in-out;
}
.container .card:hover .imgBx img{
    transform: scale(1.4) translate(-20px,-40px) rotate(-20deg) rotateY(180deg);
}
.container .card .imgBx h2{
    color: white;
    font-weight: 600;
    position: relative;
    top: -60px;
}
.container .card .content{
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
}
.container .card:hover .content{
    transition-delay: 0.2s;
    visibility: visible;
    opacity: 1;
    transform: translateY(-50px);
}
.container .card .content .color,
.container .card .content .size{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
}
.container .card .content .color h3,
.container .card .content .size h3{
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}
.container .card .content .size span{
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    color: #111;
    background: #fff;
    border-radius: 4px;
    margin: 0 5px;
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
}
.container .card .content .size span:hover{
    background: #9bdc28;
}
.container .card .content .color span{
    width: 20px;
    height: 20px;
    background: #9bdc28;
    border-radius: 50%;
    margin: 0 5px;
    border: 2px solid #fff;
    box-sizing: border-box;
    cursor: pointer;
}
.container .card .content .color span:nth-child(3){
    background: #03a9f4;
}
.container .card .content .color span:nth-child(4){
    background: #f1b2ce;
}
.container .card .content .color span:nth-child(5){
    background: #f3c47b;
}
.container .card .content a{
    position: relative;
    top: 10px;
    display: inline-block;
    padding: 12px 30px;
    border-radius:  40px;
    background: #fff;
    font-weight: 400;
    letter-spacing: 1px;
    color: #111;
    text-decoration: none;
    text-transform: uppercase;
}
</style>