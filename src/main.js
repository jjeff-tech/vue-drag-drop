import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'toastr/build/toastr.min.css';

import * as toastr from 'toastr/build/toastr.min.js';

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getCopy(val) {
      return JSON.parse(JSON.stringify(val));
    },
    toast(msg, type = 'success') {
      toastr.options.closeButton = true;
      toastr[type](msg);
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
