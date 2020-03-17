import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faArrowUp, faArrowDown)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

import router from './router'
import axios from "axios";

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "https://josh-cookbook.herokuapp.com" : "https://josh-cookbook.herokuapp.com";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
