import { computed, getCurrentInstance, inject } from "vue";
import { ICheckBoxProps, ICheckBoxProvide } from "./checkbox.type";

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
const useCheckGroup = ()=>{
  const injectVal = inject<ICheckBoxProvide>("ZCheckboxGroup", {});
  const ifGroup = injectVal.name === "ZCheckboxGroup";  //p判断有没有父亲
  return{
    injectVal,
    ifGroup
  }

}
function useModel(props: ICheckBoxProps) {
  const { emit } = getCurrentInstance();
  const { ifGroup, injectVal } = useCheckGroup();
  const model = computed({
    get() {
      return ifGroup
        ? injectVal.modelValue.value || props.modelValue
        : props.modelValue;
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
    if(Array.isArray(value)) {
      return value.includes(props.label)
    }else{

      return value;
    }
  });
  return isChecked;
}
