import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFriendlyIframe from "vue-friendly-iframe";

Vue.config.productionTip = false;

import Forms from "@/components/forms/Forms";
Vue.component("Forms", Forms);

import BaseLayout from "@/components/layouts/BaseLayout";
Vue.component("BaseLayout", BaseLayout);

import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue-flicking/dist/flicking-inline.css";

Vue.use(Flicking);

Vue.use(VueFriendlyIframe),
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
