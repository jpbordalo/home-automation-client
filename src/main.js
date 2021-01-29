import Vue from 'vue';
import VueRouter from 'vue-router';
import ROUTES from "@/plugins/routes";
import store from "@/store";
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: ROUTES
})

Vue.use(VueRouter);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
