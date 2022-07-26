import { computed, getCurrentInstance } from "vue";
import { ICheckBoxProps } from "./checkbox.type";

export const useCheckbox = (props: ICheckBoxProps) => {
  let model = useModel(props);
  const isChecked = useCheckboxStatus(props, model);
  const handelChange = useEvent();
  return {
    model,
    isChecked,
    handelChange,
  };
};
function useEvent() {
  const { emit } = getCurrentInstance();
  const handelChange = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    const changeValue = target.checked;
    emit("change", changeValue);
  };
  return handelChange;
}
function useModel(props: ICheckBoxProps) {
  const { emit } = getCurrentInstance();
  const model = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit("update:modelValue", val);
    },
  });
  return model;
}
function useCheckboxStatus(props: ICheckBoxProps, model: any) {
  const isChecked = computed(() => {
    const value = model.value;
    return value;
  });
  return isChecked;
}
