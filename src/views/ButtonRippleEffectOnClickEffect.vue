<template>
    <div class="home">
        <div class = "title">Button Ripple Effect on Click Effect Example</div>
        <div class="RippleMainBox">
            <a class = "RippleA" href="#">Button</a>
            <a class = "RippleA" href="#">Button</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        const buttons = document.querySelectorAll('a')
        buttons.forEach(btn => {
            btn.addEventListener('click', function(e){
                let x = e.clientX - e.target.offsetLeft
                let y = e.clientY - e.target.offsetTop

                let ripples = document.createElement('span')
                ripples.style.left = x + 'px'
                ripples.style.top = y + 'px'
                this.appendChild(ripples)

                setTimeout(() => {
                    ripples.remove()
                }, 1000)
            })
        })
    },
}
</script>

<style>
.RippleMainBox{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    flex-direction: column;
    background: #040d15;
}
.RippleA{
    position: relative;
    display: inline-block;
    padding: 20px 50px;
    margin: 10px 0;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 40px;
    overflow: hidden;
    background: linear-gradient(90deg, #0a4788, #23a7bb)
}
.RippleA:nth-child(2){
    background: linear-gradient(90deg, #20164d, #eb3599)
}
.RippleA span{
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: RippleAnimate 1s linear infinite;
}
@keyframes RippleAnimate{
    0%{
        width: 0px;
        height: 0px;
        opacity: 0.7;
    }
    100%{
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}
</style>