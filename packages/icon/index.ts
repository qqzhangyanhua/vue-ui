import Icon from "./src/icon.vue";
import { App, createApp } from "vue";

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon); //注册全局
};
type IWithInstall<T> = T & { install: () => void };
const _Icon: IWithInstall<typeof Icon> = Icon;
export default _Icon;
