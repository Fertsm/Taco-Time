import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false
Vue.component('v-select',vSelect);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
