<template>
  <div class="home">
    <div class="title">FaceApiJs Face Recogniser Example</div>
    <div class="MainBox">
      <input style="margin: 10px 0" type="file" accept="image/*" id="imageUpload">
      <div>Wait 5-10 seconds until upload</div>
    </div>
  </div>
</template>

<script>
import * as faceapi from '../face-api.min.js'
export default {
mounted(){
const imageUpload = document.getElementById('imageUpload')
let predictedAges = [];

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("../models"),
  faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
  faceapi.nets.faceLandmark68TinyNet.loadFromUri('../models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('../models'),
  faceapi.nets.faceExpressionNet.loadFromUri("../models"),
  faceapi.nets.ageGenderNet.loadFromUri("../models")
]).then(start)

function interpolateAgePredictions(age) {
  predictedAges = [age].concat(predictedAges).slice(0, 30);
  const avgPredictedAge =
    predictedAges.reduce((total, a) => total + a) / predictedAges.length;
  return avgPredictedAge;
}


async function start() {
  const useTinyModel = true
  const container = document.createElement('div')
  container.style.position = 'relative'
  container.style.width = '100%'

  document.body.append(container)
  let image
  let canvas
  imageUpload.addEventListener('change', async () => {
    if (image) image.remove()
    if (canvas) canvas.remove()
    image = await faceapi.bufferToImage(imageUpload.files[0])
    image.style.objectFit = 'cover'
    image.style.width = '100%'
    container.append(image)
    canvas = faceapi.createCanvasFromMedia(image)
    canvas.style = 'position: absolute; top: 0; left: 0'
    container.append(canvas)
    const displaySize = { width: image.width, height: image.height }
    faceapi.matchDimensions(canvas, displaySize)
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks(useTinyModel).withFaceExpressions().withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    resizedDetections.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      const age = resizedDetections[0].age;
      const interpolatedAge = interpolateAgePredictions(age);
      const bottomRight = {
        x: resizedDetections[0].detection.box.topRight.x - 50,
        y: resizedDetections[0].detection.box.topRight.y - 23
      };
  
      new faceapi.draw.DrawTextField(
        [`${Math.round(interpolatedAge)} years`],
        bottomRight
      ).draw(canvas);
    })
  })
}
}

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error {
  min-height: 90vh;
  background: linear-gradient(0deg, #fff, #03adf4);
}
.sky {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sky h2 {
  font-size: 16em;
  margin-top: 100px;
  color: #fff;
  text-shadow: 15px 15px 0 rgba(0, 0, 0, 0.1);
}
.sky h2 span {
  display: inline-block;
  animation: animate 2s ease-in-out infinite;
}
.sky h2 span:nth-child(even) {
  animation-delay: -1s;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(50px);
  }
}
.field {
  padding: 100px 10px 0 10px;
  height: 40vh;
  background: #6e2308;
  box-shadow: inset 0 20px 10px #51680c;
  text-align: center;
}
.field h2 {
  color: #fff;
  font-size: 2em;
  margin-bottom: 20px;
}
.field div {
  background: #fff;
  color: #000;
  width: 160px;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
}
.plane {
  position: absolute;
  top: -70px;
  transform: rotateY(180deg);
  max-width: 300px;
}
.grass {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background: url(../assets/Animated404PageAssets/grass.png);
  background-repeat: repeat;
  animation: animateGrass 0.2s linear infinite;
}
@keyframes animateGrass {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -94px 0;
  }
}
@media (max-width: 500px) {
  .sky h2 {
    font-size: 10em;
  }
}
</style>