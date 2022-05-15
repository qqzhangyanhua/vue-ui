<template>
  <i :class="`z-icon-${name}`">icon更新</i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ZIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
});
</script>
