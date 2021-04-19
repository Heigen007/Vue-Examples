<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/examples">Examples</router-link>
    </div>
    <!-- <button>click me!</button> -->
    <!-- <button id="contacts">ME TOO</button> -->
    <button class="share">Share</button>
    <div>Your language: {{language}}</div>
    <div>Your vendor: {{vendor}}</div>
    <div>Your platform: {{platform}}</div>
    <div>Amount of your processor cores: {{hardwareConcurrency}}</div>
    <div>Your connection type: {{connectionType}}</div>
    <!-- <div>Your device is {{devise == true ? 'mobile' : 'not mobile'}}</div> -->
    <router-view/>
  </div>
</template>

<script>

export default({
  mounted(){
    // navigator.serviceWorker.register('service-worker.js');
    // const button = document.querySelector('button')
    // button.addEventListener('click', () => {
    //   Notification.requestPermission().then(async (result) => {
    //     if (result === 'granted') {
    //       const reg = await navigator.serviceWorker.getRegistration();
    //       setInterval(() => {
    //         reg.showNotification("Go go");
    //       }, 5000);
    //     }
    //   });
    // })

    // const props = ['name', 'email', 'tel', 'address', 'icon'];
    // const opts = {multiple: true};
    // const supported = ('contacts' in navigator && 'ContactsManager' in window);

    // async function getContacts() {

    //     if (supported) {
    //         const contacts = await navigator.contacts.select(props, opts);
    //         console.log(contacts)
    //     }
    //     else{
    //       console.log(navigator);
    //     }

    // }

    // const btn2 = document.getElementById('contacts');
    // btn2.addEventListener('click', getContacts);

    const shareData = {
      title: 'Heigen`s examples',
      text: 'Let`s learn with me!',
      url: 'https://pwa-example-vue-9e6d1.web.app/',
    }

    const btn = document.querySelector('.share');

    // Must be triggered some kind of "user activation"
    btn.addEventListener('click', async () => {
      try {
        await navigator.share(shareData)
      } catch(err) {
      }
    });
  },
  computed:{
    language(){
      return window.navigator.language
    },
    vendor(){
      return window.navigator.vendor
    },
    platform(){
      return window.navigator.platform
    },
    hardwareConcurrency(){
      return window.navigator.hardwareConcurrency
    },
    connectionType(){
      return window.navigator.connection.effectiveType
    },
    device(){
      return window.navigator.userAgentData.mobile
    }
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #08bb70;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.title{
    font-size: 2rem;
    color: #42b983;
    margin: 5px;
    text-align: center;
}
</style>
