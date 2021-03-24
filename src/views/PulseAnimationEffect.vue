<template>
  <div class="home">
    <div class="title">Pulse Animation Effect Example</div>
    <div class="MainBox">
      <div class="pulse">
        <div style="position: absolute; z-index: 10; font-size: 2em">
          Searching...
        </div>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <span style="--i: 4"></span>
        <span style="--i: 5"></span>
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
.MainBox {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #04ce8c;
  overflow: hidden;
}
.pulse {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: #34615c;
  border-radius: 50%;
}
.pulse span {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #34615c;
  border-radius: 50%;
  display: inline-block;
  width: 100%;
  height: 100%;
  animation: animate 2.5s linear infinite;
  animation-delay: calc(-0.5s * var(--i));
}
@keyframes animate {
  0% {
    transform: scale(1);
  }
  90% {
    transform: scale(3);
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
</style>