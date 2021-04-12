<template>
    <div class="home">
        <div class = "title">Typing Animation Example</div>
        <div class="MainBox">
            <h1>My <span class="type-animation animating">Excellent</span> Website</h1>
            <button>Retype</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        const button = document.querySelector("button");
        const word = document.querySelector("h1 span");

        // reset the transition by...
        button.addEventListener(
        "click",
        function (e) {
            e.preventDefault;

            // -> removing the class
            word.classList.remove("animating");

            // -> triggering reflow /* The actual magic */
            void word.offsetWidth;

            // -> and re-adding the class
            word.classList.add("animating");
        },
        false
        )}
}
</script>

<style lang="scss" scoped>
$chWidth: 0.56em;
// Word length
$chCount: 9;
// Typing animation length
$typeDuration: 240ms * $chCount;

$color: slateblue;
$bg: #323232;
$cursor: scale-color($color, $lightness: -10%);

.MainBox {
  display: grid;
  place-items: center;
  min-height: 100vh;
  color: $color;
  font-family: Rosario, sans-serif;
}

h1 {
  font-size: 4.5rem;
  text-align: center;
}

.type-animation {
  // Required for keeping expected alignment
  display: inline-flex;
  // Start out by hiding via width and overflow
  width: 0;
  overflow: hidden;
  // Leave room for cursor!
  padding-right: 0.08em;
  position: relative;

  &:after {
    content: "";
    background: $bg;
    position: absolute;
    right: 0;
    top: -0.05em;
    bottom: -0.05em;
    width: 0.08em;
    border-right: 2px solid transparent;
  }

  &.animating {
    animation: type $typeDuration;
    // "stick" to last frame
    animation-fill-mode: forwards;
    animation-delay: 1s;

    &:after {
      $cursorLoopCount: ((($chCount + 1) * 180)/310) + 1;
      animation: cursor 460ms $cursorLoopCount ease-in-out;
    }
  }
}

@keyframes cursor {
  0%,
  100% {
    border-color: $bg;
  }
  50% {
    border-color: $cursor;
  }
  100% {
    width: 0;
  }
}

$frameSize: 100 / $chCount;
@keyframes type {
  @for $ch from 1 to $chCount {
    $frame: $ch * $frameSize;
    #{$frame}% {
      width: $ch * $chWidth;
    }
  }
  100% {
    width: ($chCount - 1) * $chWidth;
    padding-right: 0;
  }
}

button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.75em;
  background: transparent;
  border-radius: 4px;
  color: inherit;
  border: 2px solid currentcolor;
  min-height: 34px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  &:hover,
  &:focus {
    background-color: scale-color($bg, $lightness: -5%);
  }
}
</style>
