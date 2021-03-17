<template>
  <div class="returnTop-page">
    <span class="back" @click="back">&lt; 返回</span>
    <span class="splitter">|</span>
    <span class="tit">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
};
</script>

<style lang="scss" scoped>
.returnTop-page {
  font-size: 16px;
  text-align: left;
  height: 70px;
  line-height: 70px;
  padding: 0px 30px;
  color: rgb(51, 51, 51);
  .back {
    color: rgb(0, 193, 222);
    cursor: pointer;
    padding-right: 8px;
  }
  .splitter {
    color: rgb(136, 183, 224);
    padding-right: 8px;
  }
}
</style>