module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'My App',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black-translucent',
  
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW'
    //   workboxOptions: {
    //     // swSrc is required in InjectManifest mode.
    //     swSrc: 'dev/sw.js',
    //     // ...other Workbox options...
    //   }
    }
  }