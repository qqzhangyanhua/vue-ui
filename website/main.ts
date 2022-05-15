import { createApp } from "vue";
import App from "./App.vue";
import axzoUi from "axzo-ui";
// import axzoUi from "../lib/index.js";
import "theme-chalk/src/index.scss";
createApp(App).use(axzoUi).mount("#app");
