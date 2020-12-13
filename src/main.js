import Vue from "vue";
import { router } from './router'
import App from "./App.vue";
import VueScrollTo from 'vue-scrollto'
import '@/assets/css/global.css'
// import './js/jquery.min.1.7'
// import './js/turn'
// import LoadScript from 'vue-plugin-load-script'

// Vue.use(LoadScript)

// Vue.loadScript("./js/jquery.min.1.7.js")
// Vue.loadScript("./js/turn.js")

Vue.config.productionTip = false;

Vue.use(VueScrollTo)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
