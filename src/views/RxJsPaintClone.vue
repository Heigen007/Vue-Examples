<template>
    <div class="home">
        <div class = "title">Rx.js Paint Clone Example</div>
        <div class="MainBox">
            <canvas width='700px' height='500px' style=" background-color: white"></canvas>
            <button style="padding: 10px 20px 10px 20px; border-radius: 5px; background-color: green; margin: 30px auto; border: none; outline: none">Clear</button>
        </div>
    </div>
</template>

<script>
import {fromEvent} from 'rxjs'
import {map, tap} from 'rxjs/operators'
export default {
    name: 'Home',
    mounted(){
        fromEvent(document.querySelector('canvas'),'mousemove')
        .pipe(
            // tap(e => console.log(e.offsetX, e.offsetY)),
            map(e => ({
                x: e.offsetX,
                y: e.offsetY,
                ctx: e.target.getContext('2d')
            }))
        )
        .subscribe(pos => {
            pos.ctx.fillRect(pos.x, pos.y, 5, 5)
        })

        fromEvent(document.querySelector('button'), 'click')
        .subscribe(e => {
            var canvas = document.querySelector('canvas')
            var ctx = canvas.getContext('2d')
            ctx.clearRect(0,0,canvas.width, canvas.height)
        })
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
