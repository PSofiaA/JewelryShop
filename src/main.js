import "./assets/main.css";
import UIcomponents from "@/components/UI";
import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";

const app = createApp(App);
UIcomponents.forEach((element) => {
  app.component(element.name, element);
  console.log(element);
});
// app.use(router)

app.mount("#app");
