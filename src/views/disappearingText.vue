<template>
  <div class="home">
      <div class = "title">Dissapearing Text - Smoke Example</div>
    <section>
        <p class = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
  </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        const text = document.querySelector('.text')
        text.innerHTML = text.textContent.replace(/\S/g,
        "<span>$&</span>")

        const letters = document.querySelectorAll('span')
        for (let index = 0; index < letters.length; index++) {
            letters[index].addEventListener("mouseenter", function(){
                letters[index].classList.add('active')
            })
        }
    },
}
</script>

<style>

*{
    box-sizing: border-box;
}

section{
    position: relative;
    display: flex;
    justify-items: center;
    align-items: center;
    min-height: calc(100vh - 78px);
    background: #111;
    overflow: hidden;
}

section .text{
    position: relative;
    text-align: center;
    color: #fff;
    margin: 40px;
    max-width: 800px;
    user-select: none;
    font-size: 1.5em;
}
section .text span{
    position: relative;
    display: inline-block;
    cursor: pointer;
}

section .text span.active{
    animation:  smoke 2s linear forwards;
}

@keyframes smoke{
    0%{
        opacity: 1;
        filter: blur(0);
        transform: translateX(0) translateY(0) rotate(0deg) scale(1);
    }
    50%{
        opacity: 1;
        pointer-events: none;
    }
    100%{
        opacity: 0;
        filter: blur(20px);
        transform: translateX(300px) translateY(-300px) rotate(720deg) scale(4);
    }
}

</style>