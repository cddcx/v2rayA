import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../locales";

Vue.use(VueI18n);

// Ready translated locale messages

// Create VueI18n instance with options
let locale = "en";
for (let l of window.navigator.languages) {
  l = l.split("-")[0];
  if (l in messages) {
    locale = l;
  }
}
const i18n = new VueI18n({
  locale,
  messages,
  fallbackLocale: "en"
});

export default i18n;
