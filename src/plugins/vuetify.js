import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#000",
        secondary: "#818383",
        accent: "#ff8000",
        accent1: "#00ff00",
        accent2: "#ff0000"
      },
    },
  },
});
