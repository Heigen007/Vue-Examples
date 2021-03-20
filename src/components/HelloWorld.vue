<template>
  <div class="hello">
    <h3>Animations</h3>
    <ul>
      <li><a href="/spider">Line Spider</a></li>
      <li><a href="/disappearingText">Disappearing Smoke Text</a></li>
      <li><a href="/ImageHoverEffect">Image Hover Effect</a></li>
      <li><a href="/DotsCSSPreloader">Dots CSS preloader</a></li>
      <li><a href="/CSSCardHoverEffect">CSS Card Hover/Active Effect</a></li>
      <li><a href="/ImageAppearingAnimation">Image Appearing Animation</a></li>
      <li><a href="/ScrollEffect">Scroll Effect</a></li>
      <li><a href="/ImageFlipEffect">Image Flip Effect</a></li>
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