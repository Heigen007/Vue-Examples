<template>
  <!-- Works only on localhost or with ssl/tlc protocols -->
  <div class="home">
    <div class="title">Webcam example</div>
    <h2>1. Start your Webcam</h2>
    <div class="videos">
      <span>
        <h3>Local Stream</h3>
        <video id="webcamVideo" autoplay playsinline></video>
      </span>
    </div>

    <button id="webcamButton">Start webcam</button>
  </div>
</template>

<script>
export default {
  name: "Error404",
  mounted() {
    let localStream = null;
    const webcamButton = document.getElementById("webcamButton");
    const webcamVideo = document.getElementById("webcamVideo");

    webcamButton.onclick = async () => {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      webcamVideo.srcObject = localStream;
    };
  },
};
</script>

<style scoped>
#webcamButton {
  background-color: #b6eebd;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
}
.home{
    min-height: 90vh;
}
</style>