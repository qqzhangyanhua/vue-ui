import { defineComponent, h } from "vue";

export default defineComponent({
  name: "ZRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  setup(props, { slots }) {
    return () => h(props.tag, {}, slots.default?.());
  },
});