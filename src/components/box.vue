<template>
  <div class="box" :class="classname">
    <h2 class="title">{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    }
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.box {
  @include page;
  .title {
    background-image: url("~@/assets/home/line.png");
    background-size: 10px 20px;
    background-position: 0 center;
    background-repeat: no-repeat;
  }
  &.pc {
    .title {
      font-size: 34px;
      font-weight: 500;
      padding-left: 20px;
    }
  }
  &.mobile {
    .title {
      font-size: 22px;
      font-weight: bold;
      padding-left: 25px;
    }
  }
}
</style>
