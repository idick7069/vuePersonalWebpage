// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#4bc0c5', /* Main Primary color */
    secondary: '#A9EBEF',
    thirdary: '#73D6DB',
    forth: '#2CA8AD',
    fiveth: '#0D9298'
  }
})

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  iconfont: 'fa' // 'md' || 'mdi' || 'fa' || 'fa4'
})
