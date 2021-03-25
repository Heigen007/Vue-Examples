<template>
  <div class="home">
    <div class="title">Scroll Effect Example</div>
    <div class="MainBox">
      <div class="error">
        <div class="sky">
          <h2><span>4</span><span>0</span><span>4</span></h2>
          <div class="grass"></div>
          <img src="../assets/Animated404PageAssets/plane.png" class="plane" />
        </div>
        <div class="field">
          <h2>Opps...looks like you got lost.</h2>
          <div>Go Home</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error {
  min-height: 90vh;
  background: linear-gradient(0deg, #fff, #03adf4);
}
.sky {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sky h2 {
  font-size: 16em;
  margin-top: 100px;
  color: #fff;
  text-shadow: 15px 15px 0 rgba(0, 0, 0, 0.1);
}
.sky h2 span {
  display: inline-block;
  animation: animate 2s ease-in-out infinite;
}
.sky h2 span:nth-child(even) {
  animation-delay: -1s;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(50px);
  }
}
.field {
  padding: 100px 10px 0 10px;
  height: 40vh;
  background: #6e2308;
  box-shadow: inset 0 20px 10px #51680c;
  text-align: center;
}
.field h2 {
  color: #fff;
  font-size: 2em;
  margin-bottom: 20px;
}
.field div {
  background: #fff;
  color: #000;
  width: 160px;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
}
.plane {
  position: absolute;
  top: -70px;
  transform: rotateY(180deg);
  max-width: 300px;
}
.grass {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background: url(../assets/Animated404PageAssets/grass.png);
  background-repeat: repeat;
  animation: animateGrass 0.2s linear infinite;
}
@keyframes animateGrass {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -94px 0;
  }
}
@media (max-width: 500px) {
  .sky h2 {
    font-size: 10em;
  }
}
</style>