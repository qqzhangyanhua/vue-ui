<template>
  <div class="z-checkbox_group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, provide } from "vue";
export default defineComponent({
  name: "ZCheckboxGroup",
  props:{
    modelValue:Array,  //需要伏组件传递
  },
  emits:['change',"update:modelValue",],
  setup(props,{emit}) {
    const modelValue = computed(()=>props.modelValue);
    const changeEvent = (val)=>{
        emit('change', val);
        emit('update:modelValue', val);
    }
    provide('ZCheckboxGroup',{
      name:'ZCheckboxGroup',
      modelValue: modelValue,
      changeEvent: changeEvent
    })
  },
});
</script>
