<template>
    <div class="home">
        <section class="bg">
            <h2>Scroll Effect Example</h2>
            <span class="SkewedOne"></span>
            <span class="SkewedTwo"></span>
        </section>
        <section class = "text">
            <h2>Here is Your Text!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        const SkewedOne = document.querySelector('.SkewedOne')
        const SkewedTwo = document.querySelector('.SkewedTwo')
        window.addEventListener('scroll', function(){
            const value1 = -25 + window.scrollY/22;
            SkewedOne.style.transform = "skewY(" + value1 + "deg)"
            SkewedTwo.style.transform = "skewY(" + -value1 + "deg)"
        })
    },
}
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.home{
  background: #323232;
}
.bg{
    position: relative;
    width: 100%;
    height: 70vh;
    background-color: #2bbaff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.bg h2{
    position: relative;
    color: #fff;
    font-size: 4rem;
}
.SkewedOne{
    transition: 0.1s;
    position: absolute;
    top: 100%;
    left:50%;
    width: 100%;
    height: 100vh;
    background-color: #323232;
    transform: skewY(-25deg);
    transform-origin: top left;
}
.SkewedTwo{
    transition: 0.1s;
    position: absolute;
    top: 100%;
    right:50%;
    width: 100%;
    height: 100vh;
    background-color: #323232;
    transform: skewY(25deg);
    transform-origin: top right;
}
.text h2{
    text-align: left;
    color: #fff;
    font-size: 2em;
    margin-bottom: 10px;
}
.text p{
    text-align: left;
    color: #fff;
    font-size: 1.2em;
}
section{
    padding: 100px;
}
@media (max-width: 550px) {
.bg{
    height: 100%;
}
}
</style>