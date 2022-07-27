import { ComputedRef } from "vue";

export interface ICheckBoxProps {
  indeterminate?: boolean;
  checked?: boolean;
  name?: string;
  value?: string;
  disabled?: boolean;
  label?: string | number | boolean;
  modelValue?: any;
}
export interface ICheckBoxProvide{
  modelValue?: ComputedRef;
  changeEvent?:(val:unknown)=>void;
  name?: string
}