<template>
  <div class="home">
    <div class="title">Image Flip Effect</div>
    <div class="body">
      <div class="imgBx">
        <input type="checkbox" />
        <span class="bg1"></span>
        <span class="bg2"></span>
        <div class="backGround"></div>
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
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
.imgBx {
  text-align: left;
  width: 400px;
  height: 400px;
  background: #000;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.imgBx input[type="checkbox"] {
  position: absolute;
  z-index: 1000;
  width: 400px;
  height: 400px;
  appearance: none;
  outline: none;
  cursor: pointer;
}
span {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  pointer-events: none;
  transform-style: preserve-3d;
}
span.bg1 {
  left: 0;
  background: url("../assets/ImageFlipEffectAssets/photo1.jpg");
}
span.bg1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/ImageFlipEffectAssets/photo2.jpg");
  transform-origin: right;
  transition: 2s;
  backface-visibility: hidden;
}
.imgBx input[type="checkbox"]:checked ~ span.bg1::before {
  transform: rotateY(180deg);
}
span.bg2 {
  right: 0;
  background: url("../assets/ImageFlipEffectAssets/photo2.jpg");
  background-position-x: -200px;
}
span.bg2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/ImageFlipEffectAssets/photo1.jpg");
  background-position-x: -200px;
  transform-origin: left;
  transition: 2s;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}
.imgBx input[type="checkbox"]:checked ~ span.bg2::before {
  transform: rotateY(360deg);
}
.backGround {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.3), 0 10vh 0 800px #a0d621;
  pointer-events: none;
}
.imgBx input[type="checkbox"]:checked ~ .backGround {
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.3), 0 0 0 800px #ffa011;
}
</style>

