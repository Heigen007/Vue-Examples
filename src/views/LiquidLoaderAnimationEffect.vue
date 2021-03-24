<template>
  <div class="home">
    <div class="title">Liquid Loader Animation Example</div>
    <div class="MainBox">
      <div class="loader">
        <div class="loader-name">Loading...</div>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <span style="--i: 4"></span>
        <span style="--i: 5"></span>
        <span style="--i: 6"></span>
        <span style="--i: 7"></span>
      </div>
      <div class="loader-name-absolute">Loading...</div>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
            "
          />
        </filter>
      </svg>
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
.MainBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
  background: #010b10;
}
svg {
  width: 0;
  height: 0;
}
.loader {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: url(#gooey);
}
.loader-name {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px 8px 20px;
  color: black;
  border-radius: 10px;
  font-size: 2em;
  background: linear-gradient(#fce4ec, #03a9f4);
  margin-top: 220px;
  z-index: 1;
}
.loader-name-absolute {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px 8px 20px;
  color: black;
  border-radius: 10px;
  font-size: 2em;
  background: transparent;
  margin-top: 220px;
  z-index: 2;
}
.loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  animation: animate 4s ease-in-out infinite;
  animation-delay: calc(0.2s * var(--i));
}
.loader span:before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 30px #03a9f4;
  background: linear-gradient(#fce4ec, #03a9f4);
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  50%,
  100% {
    transform: rotate(360deg);
  }
}
</style>