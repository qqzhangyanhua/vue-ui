<template>
  <div>
    qqqq
    <z-button icon="z-icon-pen" disabled>按钮</z-button>
    <!-- <button icon="z-icon-pen" loading @click="handelClick">按钮211111</button> -->
    <z-button icon="z-icon-pen" round>按钮3</z-button>
    <br />
    <z-button icon="z-icon-pen" type="danger" @click="handelClick"
      >按钮3</z-button
    >
    <z-button type="success">按钮4</z-button>
    <z-button type="success" icon="z-icon-pen"></z-button>
    <br />
    <z-button-group>
      <z-button type="success">上一页</z-button>
      <z-button type="success">下一页</z-button>
    </z-button-group>
    <z-icon name="pen"></z-icon>
  </div>
</template>
<script lang="ts" setup>
const handelClick = (e) => {
  console.log("打印---", e);
};
</script>
<style lang="scss" scoped></style>
