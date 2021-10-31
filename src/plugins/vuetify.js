import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#FF2A64",
        secondary: "#4871EA",
        backgroundPrimary: "#090D31",
        third: "#2AF0FD",
        quarter: "#2AFD8C"
      },
      dark: {
        primary: "#FF2A64",
        secondary: "#4871EA",
        third: "#2AF0FD",
        quarter: "#2AFD8C",
        backgroundPrimary: "#090D31"
      }
    }
  },
  icons: {
    iconfont: "md"
  }
});
