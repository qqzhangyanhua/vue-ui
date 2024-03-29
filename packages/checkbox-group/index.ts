import CheckboxGroup from "../checkbox/src/checkbox-group.vue";
import { App } from "vue";

CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup); //注册全局
};
type IWithInstall<T> = T & { install(app: App): void };
const _CheckboxGroup: IWithInstall<typeof CheckboxGroup> = CheckboxGroup;
export default _CheckboxGroup;
