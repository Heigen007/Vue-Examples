<template>
    <div class="home">
        <div class = "title">Wavy Text Animation Example</div>
        <div class="Box">
            <div class="wavy">
                <span style="--i:1;">L</span>
                <span style="--i:2;">o</span>
                <span style="--i:3;">a</span>
                <span style="--i:4;">d</span>
                <span style="--i:5;">i</span>
                <span style="--i:6;">n</span>
                <span style="--i:7;">g</span>
                <span style="--i:8;">.</span>
                <span style="--i:9;">.</span>
                <span style="--i:10;">.</span>
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
*{
    margin: 0;
    padding: 0;
}
.Box{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background: #000;
}
.wavy{
    position: relative;
    -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0,0,0,0.2));
}
.wavy span{
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: 3em;
    text-transform: uppercase;
    animation: animate 1s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
    user-select: none;
}
@keyframes animate{
    0%{
        transform: translateY(0px);
    }
    20%{
        transform: translateY(-20px);
    }
    40%,100%{
        transform: translateY(0px);
    }
}
</style>