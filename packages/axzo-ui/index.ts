import { App } from "vue";
import Button from "@axzo-ui/button";
import Icon from "@axzo-ui/icon";
import ButtonGroup from "@axzo-ui/button-group";
import Col from "@axzo-ui/col/src";
import Row from "@axzo-ui/row/src";
import Checkbox from "@axzo-ui/checkbox";
import CheckboxGroup from "@axzo-ui/checkbox-group";

const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
];
const install = (app: App): void => {
  components.forEach((component) => {
    console.log("ssssssssss", component);
    app.component(component.name, component);
  });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
export default {
  install,
};

// 组件库看效果的网址 -》 文档  =》 md -> webpack
