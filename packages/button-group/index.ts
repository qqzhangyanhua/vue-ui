import ButtonGroup from "../button/src/button-group.vue";
import { App } from "vue";

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup); //注册全局
};
type IWithInstall<T> = T & { install(app: App): void };
const _ButtonGroup: IWithInstall<typeof ButtonGroup> = ButtonGroup;
export default _ButtonGroup;
