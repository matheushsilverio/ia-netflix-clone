import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#E50914",
        secondary: "#333333",
        backgroundPrimary: "#000"
      },
      dark: {
        primary: "#E50914",
        secondary: "#333333",
        backgroundPrimary: "#000"
      }
    }
  },
  icons: {
    iconfont: "md"
  }
});
