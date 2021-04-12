<template>
    <div class="home">
        <section class="section section-top">
      <div class="content rellax" data-rellax-speed="5">
        <h1>Community Based Driven Video</h1>
        <a href="#" class="btn btn-primary">Learn More</a>
      </div>
    </section>

    <section class="section section-stream">
      <img
        class="play rellax"
        src="https://i.ibb.co/TvdbMhQ/play-button.png"
        alt=""
        data-rellax-speed="-1" data-rellax-xs-speed="-5"
      />
      <div class="content rellax" data-rellax-speed="10">
        <div>
          <h2 class="secondary-text">Stream Everything</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
          </p>
        </div>
        <div>
          <h2 class="secondary-text">Short is the New Long</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
          </p>
        </div>
      </div>
    </section>

    <section class="section section-grid">
      <div class="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
        <v-icon name="book" style = "width: 50px; height: 50px; color: #f5c42f"></v-icon>
        <h2>Watch<span class="secondary-text dot">.</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
        </p>
      </div>
      <div class="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
        <v-icon name="users" style = "width: 50px; height: 50px; color: #f5c42f"></v-icon>
        <h2>Share<span class="secondary-text dot">.</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
        </p>
      </div>
      <div class="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
        <v-icon name="camera" style = "width: 50px; height: 50px; color: #f5c42f"></v-icon>
        <h2>Learn<span class="secondary-text dot">.</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
        </p>
      </div>
    </section>
    
    <footer class="footer">
      <ul>
        <li><a href="#">Faq</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Notice</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </footer>
    </div>
</template>

<script>
import Rellax from 'rellax'
export default {
    name: 'Home',
    mounted(){
        let rellax = new Rellax('.rellax');
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
}

.home {
  font-family: 'Montserrat', sans-serif;
  background: #2d2254;
  color: #fff;
  font-size: 18px;
  line-height: 1.6;
}

h1,
h2,
h3,
p {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #fff;
}

ul {
  list-style: none;
}

.btn {
  display: inline-block;
  border: 0;
  background: #f5c42f;
  color: #fff;
  border-radius: 20px;
  padding: 8px 30px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
}

.btn:hover {
  transform: scale(0.98);
}

.primary-text {
  color: #2d2254;
}

.secondary-text {
  color: #f5c42f;
}

.section {
  position: relative;
  padding: 0 20px;
}

/* Section Top */
.section-top {
  min-height: 500px;
  background: url('https://i.ibb.co/PhVR2Vh/bg1.png') no-repeat center center/cover;
}

.section-top h1 {
  font-size: 70px;
  line-height: 1.3;
}

.section-top .content {
  position: absolute;
  text-align: left;
  top: 100px;
  right: 20px;
  width: 55%;
}

/* Section Stream */
.section-stream {
  min-height: 700px;
  background: url('https://i.ibb.co/bsX6RV0/bg2.png') no-repeat center center/cover;
}

.section-stream h2 {
  font-size: 35px;
}

.section-stream .play {
  width: 27%;
  position: absolute;
  top: 100px;
  left: 50px;
}

.section-stream .content {
  position: absolute;
  text-align: left;
  width: 50%;
  top: 130px;
  right: 70px;
}

.section-stream .content > div, .section-grid > div {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

/* Section Grid */
.section-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  text-align: center;
}

.section-grid p {
  color: #c5bbec;
}

.section-grid .dot {
  font-size: 40px;
  padding-left: 2px;
}

/* Footer */
.footer {
  border-top: #c5bbec 1px solid;
  padding: 30px;
  margin-top: 20px;
}

.footer ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  flex-direction: row;
}

/* Mobile */
@media (max-width: 700px) {
  .section-top .content,
  .section-stream .play,
  .section-stream .content {
    position: static;
    width: 100%;
  }

  .section-top {
    min-height: 200px;
    padding-top: 20px;
  }

  .section-top .content {
    text-align: center;
  }

  .section-top .content h1 {
    font-size: 45px;
  }

  .section-stream {
    min-height: 400px;
  }

  .section-stream .play {
    width: 50%;
    display: block;
    margin: 30px auto;
  }

  .section-grid {
    display: block;
    margin-top: 0;
  }

  .footer ul {
    display: block;
  }
}
</style>
