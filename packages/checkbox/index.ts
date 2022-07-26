import Checkbox from "./src/checkbox.vue";
import { App } from "vue";

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox); //注册全局
};
type IWithInstall<T> = T & { install(app: App): void };
const _Checkbox: IWithInstall<typeof Checkbox> = Checkbox;
export default _Checkbox;
