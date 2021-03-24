<template>
    <div class="home">
        <div class = "title">Image Appearing Animation Example</div>
        <section class = "IAAS">
            <h2>Example</h2>
            <div class="banner">
                <div class="blocks"></div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
    const banner = document.getElementsByClassName('banner')[0];
    var blocks = document.getElementsByClassName('blocks');

    for (var i = 1; i < 500; i++){
        banner.innerHTML += "<div class='blocks'></div>";
        blocks[i].style.animationDelay = `${i * 0.02}s`;
    }
    setTimeout(() => {
        document.querySelector('.banner').style.background = "radial-gradient(63.08% 114.4% at 53.61% 0%, #FF6494 0%, #62AAFF 100%)"
        blocks = document.querySelectorAll('.blocks')
        console.log(document.querySelectorAll('.blocks').length);
        console.log(banner);
        console.log(document.getElementsByClassName('blocks')[0]);
        for (let index = 0; index < 500; index++) {
            blocks[index].remove()
        }
    }, 12500);
    },
}
</script>

<style>
.IAAS{
    position: relative;
    width: 100vw;
    height: 100vh;
}
.IAAS h2{
    position: relative;
    width: 100%;
    height: 60vh;
    text-align: center;
    line-height: 60vh;
    font-size: 10vw;
}
.banner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
}
.banner .blocks{
    position: relative;
    display: block;
    width: 5vw;
    height: 4vh;
    animation: animate 0.75s ease-in-out forwards;
}
.banner .blocks:nth-child(even){
    animation: animate 1s ease-in-out forwards;   
}
.banner .blocks:nth-child(7n+3){
    animation: animate 2.5s ease-in-out forwards;   
}
.banner .blocks:nth-child(7n+7){
    animation: animate 1.5s ease-in-out forwards;   
}
@keyframes animate
{
    0%
    {
        opacity: 0;
        transform: scale(0) translateY(1000px);
    }
    50%
    {
        opacity: 1;
        background: radial-gradient(63.08% 114.4% at 73.61% 0%, #FF6494 0%, #62AAFF 100%), #C4C4C4;
        background-attachment: fixed;
    }
    100%
    {
        opacity: 1;
        transform: scale(1) translateY(0px);
        background: radial-gradient(63.08% 114.4% at 53.61% 0%, #FF6494 0%, #62AAFF 100%), #C4C4C4;
        /* background-position: center; */
        background-attachment: fixed;
    }
}
</style>