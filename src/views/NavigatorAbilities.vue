<template>
    <div class="home">
        <div class = "title">Navigator Abilities Example</div>
        <div class="MainBox">
            <button class = "button">Send notification</button>
            <button class="share">Share</button>
            <div>Your language: {{language}}</div>
            <div>Your vendor: {{vendor}}</div>
            <div>Your platform: {{platform}}</div>
            <div>Amount of your processor cores: {{hardwareConcurrency}}</div>
            <div>Your connection type: {{connectionType}}</div>
            <div>Your device is {{device == true ? 'mobile' : 'not mobile'}}</div>
        </div>
    </div>
</template>

<script>

export default({
  mounted(){
    navigator.serviceWorker.register('service-worker.js');
    const button = document.querySelector('.button')
    button.addEventListener('click', () => {
      Notification.requestPermission().then(async (result) => {
        if (result === 'granted') {
          const reg = await navigator.serviceWorker.getRegistration();
          reg.showNotification("Hello My Friend!");
          setInterval(() => {
            reg.showNotification("Hello My Friend!");
          }, 3000);
        }
      });
    })

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

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.MainBox{
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    flex-direction: column;
}
button{
    padding: 10px;
    font-size: 1.4rem;
}
</style>