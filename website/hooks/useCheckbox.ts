import { ref } from "vue";

export const useCheckbox = () => {
  const checkVal = ref(false);
  const handelChange = (e) => {
    console.log(e);
  };
  return {
    handelChange,
    checkVal,
  };
};
