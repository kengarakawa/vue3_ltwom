import { createApp } from "vue"
import BootstrapVue3 from 'bootstrap-vue-3'
import VueSweetalert2 from 'vue-sweetalert2';


import App from "./App.vue"
import router from "./router"
import store from "./store"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import './styles/custom.css'


createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(VueSweetalert2)
  .mount("#app")
