import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlugin from "./plugins/translatePlugin";

const en = {
  app: {
    title: "Plugins",
  },
};
const ru = {
  app: {
    title: "Плагины",
  },
};

const app = createApp(App);

app.use(translatePlugin, { ru, en });

app.mount("#app");
