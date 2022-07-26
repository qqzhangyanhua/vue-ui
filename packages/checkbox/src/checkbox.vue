<template>
  <div class="z-checkbox">
    {{ modelValue }}
    <span class="z-checkbox__input">
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        @change="handelChange"
      />
    </span>
    <span class="z-checkbox-label">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCheckbox } from "./useCheckbox.ts";
export default defineComponent({
  name: "ZCheckbox",
  props: {
    name: String,
    indeterminate: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
  },
  emits: ["update:modelValue", "change"],
  setup(props) {
    console.log(props);
    return useCheckbox(props);
  },
});
</script>
