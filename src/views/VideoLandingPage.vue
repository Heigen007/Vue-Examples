<template>
    <div class="home">
        <div class="MainBox">
            	<section class="showcase">
			<div class="video-container">
				<video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
			</div>
			<div class="content">
				<h1>Shoot For The Stars</h1>
				<h3>Full screen video landing page</h3>
				<a href="#about" class="btn">Read More</a>
			</div>
		</section>

		<section id="about">
			<h1>About</h1>
			<p>
				This is a landing page with a full screen video background. Feel free to
				use this landing page in your projects. keep adding sections, change the
				video, content , etc
			</p>

			<h2>Follow Me On Social Media</h2>

			<div class="social">
				<a href="#"><v-icon name="twitter"></v-icon></a>
				<a href="#"><v-icon name="facebook"></v-icon></a>
				<a href="#"><v-icon name="github"></v-icon></a>
				<a href="#"><v-icon name="linkedin"></v-icon></a>
			</div>
		</section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
    },
}
</script>

<style scoped>

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.home {
	line-height: 1.5;
}

a {
	text-decoration: none;
	color: #3a4052;
}

h1 {
	font-weight: 300;
	font-size: 60px;
	line-height: 1.2;
	margin-bottom: 15px;
}

svg{
	width: 40px;
	height: 40px;
}

.showcase {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #fff;
	padding: 0 20px;
}

.video-container {
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: #3a4052 url('https://traversymedia.com/downloads/cover.jpg') no-repeat center
		center/cover;
}

.video-container video {
	min-width: 100%;
	min-height: 100%;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	object-fit: cover;
}

.video-container:after {
	content: '';
	z-index: 1;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
}

.content {
	z-index: 2;
}

.btn {
	display: inline-block;
	padding: 10px 30px;
	background: #3a4052;
	color: #fff;
	border-radius: 5px;
	border: solid #fff 1px;
	margin-top: 25px;
	opacity: 0.7;
}

.btn:hover {
	transform: scale(0.98);
}

#about {
	padding: 40px;
	text-align: center;
	background: #fff;
	color: #3a4052
}

#about p {
	font-size: 1.2rem;
	max-width: 600px;
	margin: auto;
}

#about h2 {
	margin: 30px 0;
	color: #3a4052;
}

.social a {
	margin: 0 5px;
}
</style>
