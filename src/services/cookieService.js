import Vue from "vue";
import cookies from "vue-cookies";

Vue.use(cookies);

export default {
  getCookie(key) {
    return Vue.$cookies.get(key);
  },
  setCookie(key, value) {
    Vue.$cookies.set(key, value, "1d");
  },
  removeCookie(key) {
    Vue.$cookies.remove(key);
  },
  clear() {
    Vue.$cookies.keys().forEach(cookie => Vue.$cookies.remove(cookie));
  }
};
