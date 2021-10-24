import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

import userModule from "./modules/user";

const vuexLocal = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: userModule
  },
  plugins: [vuexLocal.plugin]
});
