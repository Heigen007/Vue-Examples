<template>
    <div class="home">
        <div class = "title">Neon Text Effect Example</div>
        <div class="MainBox">
            <div class="box">
                <div class="lightbar"></div>
                <div class="topLayer"></div>
                <h2>Neon Text</h2>
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
    box-sizing: border-box;
}
.MainBox{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background: #000;
    overflow: hidden;
}
.box{
    position: relative;
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box h2{
    color: #fff;
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-shadow: 0 0 10px #00b3ff,
                 0 0 20px #00b3ff,
                 0 0 40px #00b3ff,
                 0 0 80px #00b3ff;
}
.lightbar{
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    border-radius: 10px;
    background: #fff;
    z-index: 2;
    box-shadow: 0 0 10px #2f5261,
                 0 0 20px #00b3ff,
                 0 0 40px #00b3ff,
                 0 0 80px #00b3ff;
    animation: animatelightbar 5s linear infinite;
}
@keyframes animatelightbar{
    0%,5%{
        transform: scaleY(0) translateX(0)
    }
    10%{
        transform: scaleY(1) translateX(0)
    }
    90%{
        transform: scaleY(1) translateX(calc(600px - 10px)); 
    }
    95%,100%{
        transform: scaleY(0) translateX(calc(600px - 10px)); 
    }
}
.topLayer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    animation: animateTopLayer 10s linear infinite;
}
@keyframes animateTopLayer{
    0%,2.5%{
        transform: translateX(0);
    }
    5%{
        transform: translateX(0);
    }
    45%{
        transform: translateX(100%); 
    }
    47.5%,50%{
        transform: translateX(100%); 
    }

    50.001%,52.5%{
        transform: translateX(-100%);
    }
    55%{
        transform: translateX(-100%);
    }
    95%{
        transform: translateX(0%); 
    }
    97.5%,100%{
        transform: translateX(0%); 
    }
}
</style>