<template>
  <div class="hello">
    <h3>Animations</h3>
    <ul>
      <li><a href="/spider">Spider</a></li>
      <li><a href="/disappearingText">Disappearing Text - Smoke</a></li>
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