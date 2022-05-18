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
    <z-row tag="div">
      <z-col tag="p" :span="4">
        <div style="background: rebeccapurple">11</div>
      </z-col>
      <z-col tag="p" :span="4" :offset="4">
        <div style="background: pink">11</div>
      </z-col>
      <z-col tag="p" :span="4">
        <div style="background: yellow">11</div>
      </z-col>
    </z-row>
    <z-row tag="div" :gutter="40">
      <z-col tag="p" :span="8">
        <div style="background: rebeccapurple">11</div>
      </z-col>
      <z-col tag="p" :span="8">
        <div style="background: pink">11</div>
      </z-col>
      <z-col tag="p" :span="8">
        <div style="background: yellow">11</div>
      </z-col>
    </z-row>

    <z-row tag="div" justify="center">
      <z-col tag="p" :span="2">
        <div style="background: rebeccapurple">11</div>
      </z-col>
      <z-col tag="p" :span="2">
        <div style="background: pink">11</div>
      </z-col>
      <z-col tag="p" :span="8">
        <div style="background: yellow">11</div>
      </z-col>
    </z-row>
  </div>
</template>
<script lang="ts" setup>
const handelClick = (e) => {
  console.log("打印---", e);
};
</script>
<style lang="scss" scoped></style>
