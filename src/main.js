import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import Forms from "@/components/forms/Forms";
Vue.component("Forms", Forms);

import BaseLayout from "@/components/layouts/BaseLayout";
Vue.component("BaseLayout", BaseLayout);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
