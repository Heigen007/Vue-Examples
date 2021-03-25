<template>
  <div class="hello">
    <div id="scrollPath"></div>
    <div id="progressBar"></div>
    <h3>Text Effects</h3>
    <ul>
      <li><a href="/DisappearingText">Disappearing Smoke Text</a></li>
      <li><a href="/WavyTextAnimation">Wavy Text Animation/Loader</a></li>
      <li><a href="/NeonTextEffect">Neon Light Text Effect</a></li>
      <li><a href="/3DIsometricTextEffect">3D Isometric Text Effect</a></li>
    </ul>

    <h3>Image/Card Effects</h3>
    <ul>
      <li><a href="/ImageFlipEffect">3D Image Flip Effect</a></li>
      <li><a href="/ImageAppearingAnimation">Image Appearing Animation</a></li>
      <li><a href="/ImageHoverEffect">Image Hover Effect</a></li>
      <li>
        <a href="/ClipPathImageEffect">CSS Clip-path Image Hover Effect</a>
      </li>
      <li><a href="/CardParalaxEffect">3D Paralax Effect</a></li>
      <li><a href="/3DFlipCard">3D Flip Card</a></li>
      <li><a href="/CSSCardHoverEffect">CSS Card Hover/Active Effect</a></li>
      <li><a href="/BackgroundBlendMode">Background Blend Mode</a></li>
      <li>
        <a href="/ResponsiveCardHoverEffect">Responsive Card Hover Effect</a>
      </li>
    </ul>

    <h3>Scroll Effects</h3>
    <ul>
      <li><a href="/ScrollEffect">Scroll Effect</a></li>
      <li><a href="/ScrollEffect2">Scroll Effect2</a></li>
      <li><a href="/BackToTopButton">Scroll To Top Button</a></li>
    </ul>

    <h3>Errors And Errors Pages</h3>
    <ul>
      <li><a href="/Error404">Error404</a></li>
      <li><a href="/Animated404Page">Animated 404 Page</a></li>
    </ul>

    <h3>Complete Components</h3>
    <ul>
      <li><a href="/TouchSlider">Infinitive Touch Slider</a></li>
      <li>
        <a href="/ResponsiveLogRegisterForm"
          >Responsive Login and Registration Form</a
        >
      </li>
      <li>
        <a href="/CopyToClipboardEffect"
          >Password Generator With Copy To Clipboard Effect</a
        >
      </li>
    </ul>

    <h3>Preloaders</h3>
    <ul>
      <li>
        <a href="/LiquidLoaderAnimationEffect">Liquid Loader Animation</a>
      </li>
      <li><a href="/DotsCSSPreloader">Dots CSS preloader</a></li>
      <li><a href="/WavyTextAnimation">Wavy Text Animation/Loader</a></li>
    </ul>

    <h3>Extra Effects</h3>
    <ul>
      <li><a href="/PulseAnimationEffect">Pulse Animation Effect</a></li>
      <li><a href="/Spider">Line Spider</a></li>
      <li>
        <a href="/ButtonRippleEffectOnClickEffect"
          >Button Ripple Effect on Click</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover {
  color: green;
}
::-webkit-scrollbar {
  width: 0px;
}
#scrollPath {
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: rgba(49, 25, 25, 0.7);
}
#progressBar {
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0%,
  100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
}
</style>