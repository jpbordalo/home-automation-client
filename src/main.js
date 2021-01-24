import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import ROUTES from "@/plugins/routes";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: ROUTES
})

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
