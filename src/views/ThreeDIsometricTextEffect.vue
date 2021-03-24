<template>
  <div class="home">
    <div class="title">3D Isometric Text Effect Example</div>
    <div class="MainBox">
      <div id="text" data-text="CSS 3D Isometric Text">
        CSS 3D Isometric Text
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    var text = document.getElementById("text");
    var shadow = "";
    for (let i = 0; i < 25; i++) {
      shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9";
    }
    text.style.textShadow = shadow;
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.MainBox {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: #f1f1f1;
  overflow: hidden;
}
#text {
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 9em;
  line-height: 0.9em;
  letter-spacing: 2px;
  text-align: center;
  transform: rotate(-28deg) skew(25deg);
}
#text::before {
  content: attr(data-text);
  position: absolute;
  top: 30px;
  left: -30px;
  color: rgba(0, 0, 0, 0.5);
  text-shadow: none;
  filter: blur(10px);
  z-index: -1;
}
</style>