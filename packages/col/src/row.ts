import { computed, defineComponent, h, provide } from "vue";

export default defineComponent({
  name: "ZRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: "start",
    },
  },
  setup(props, { slots }) {
    const classs = computed(() => [
      "z-row",
      props.justify !== "start" ? `is-justify-${props.justify}` : "",
    ]);
    const style = computed(() => {
      let res = {
        marginLeft: "",
        marginRight: "",
      };
      if (props.gutter) {
        res.marginRight = res.marginLeft = `-${props.gutter / 2}px`;
      }
      return res;
    });
    provide("zRow", props.gutter);
    return () =>
      h(
        props.tag,
        { class: classs.value, style: style.value },
        slots.default?.()
      );
  },
});
