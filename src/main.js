import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "@fortawesome/fontawesome-free/css/all.min.css";

createApp(App).use(router).use(BootstrapVue3).mount("#app");
