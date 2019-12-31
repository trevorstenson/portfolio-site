import Vue from "vue";
import App from "./App.vue";
import VueScrollTo from 'vue-scrollto'
import '@/assets/css/global.css'

Vue.config.productionTip = false;

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App)
}).$mount("#app");
