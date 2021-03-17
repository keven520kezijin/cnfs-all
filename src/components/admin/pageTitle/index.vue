<template>
  <h2 class="title-page">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style  lang="scss" scoped>
.title-page {
  font-size: 24px;
  height: 70px;
  line-height: 70px;
  padding-left: 20px;
  background-image: url("~@/assets/admin/line.png");
  background-position: 0 center;
  background-repeat: no-repeat;
  text-align: left;
}
</style>
