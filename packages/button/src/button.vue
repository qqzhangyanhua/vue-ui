<template>
  <button :class="classs" :disabled="disabled" @click.native="handelClick">
    <i :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type IButtonType =
  | "primary"
  | "waring"
  | "success"
  | "danger"
  | "info"
  | "link";
export default defineComponent({
  name: "ZButton",
  emits: ["click"],
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: "primary",
      validator: (val: string) => {
        return [
          "primary",
          "waring",
          "success",
          "danger",
          "info",
          "link",
        ].includes(val);
      },
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  setup(props, { emit }) {
    const classs = computed(() => [
      "z-button",
      "z-button--" + props.type,
      {
        "is-disabled": props.disabled,
        "is-loading": props.loading,
        "is-round": props.round,
      },
    ]);
    const handelClick = (e) => {
      emit("click", e);
    };
    return {
      classs,
      handelClick,
    };
  },
});
</script>
<style lang="scss" scoped></style>
