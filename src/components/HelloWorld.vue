<template>
  <div class="hello">
    <h3>Animations</h3>
    <ul>
      <li><a href="/Spider">Line Spider</a></li>
      <li><a href="/DisappearingText">Disappearing Smoke Text</a></li>
      <li><a href="/ImageHoverEffect">Image Hover Effect</a></li>
      <li><a href="/DotsCSSPreloader">Dots CSS preloader</a></li>
      <li><a href="/CSSCardHoverEffect">CSS Card Hover/Active Effect</a></li>
      <li><a href="/ImageAppearingAnimation">Image Appearing Animation</a></li>
      <li><a href="/Error404">Error404</a></li>
      <li><a href="/ClipPathImageEffect">CSS Clip-path Image Hover Effect</a></li>
      <li><a href="/ScrollEffect">Scroll Effect</a></li>
      <li><a href="/ScrollEffect2">Scroll Effect2</a></li>
      <li><a href="/ImageFlipEffect">3D Image Flip Effect</a></li>
      <li><a href="/CardParalaxEffect">3D Paralax Effect</a></li>
      <li><a href="/WavyTextAnimation">Wavy Text Animation/Loader</a></li>
      <li><a href="/NeonTextEffect">Neon Light Text Effect</a></li>
      <li><a href="/3DFlipCard">3D Flip Card</a></li>
      <li><a href="/BackToTopButton">Back To Top Button</a></li>
      <li><a href="/TouchSlider">Infinitive Touch Slider</a></li>
      <li><a href="/LiquidLoaderAnimationEffect">Liquid Loader Animation</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
a:hover{
  color: green;
}
</style>