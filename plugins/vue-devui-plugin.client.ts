import { defineNuxtPlugin } from "#app";
import DevUI from "vue-devui";
import "vue-devui/button/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DevUI)
});
