import Button from "./src/button.vue";
import { App, createApp } from "vue";

Button.install = (app: App): void => {
  app.component(Button.name, Button); //注册全局
};
type IWithInstall<T> = T & { install(app: App): void };
const _Button: IWithInstall<typeof Button> = Button;
export default _Button;
