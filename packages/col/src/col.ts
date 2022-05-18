import { computed, defineComponent, h, inject } from "vue";

export default defineComponent({
  name: "ZCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const gutter = inject("zRow", 0);
    const style = computed(() => {
      if (gutter != 0) {
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`,
        };
      }
      return {};
    });
    const classs = computed(() => {
      const res = [];
      const ops = ["span", "offset"] as const;
      ops.forEach((key) => {
        const size = props[key];
        if (typeof size == "number" && size > 0) {
          res.push(`z-col-${key}-${size}`);
        }
      });
      return ["z-col", ...res];
    });
    return () =>
      h(
        props.tag,
        { class: classs.value, style: style.value },
        slots.default?.()
      );
  },
});
