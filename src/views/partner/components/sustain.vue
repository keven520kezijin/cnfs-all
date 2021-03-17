<template>
  <div class="sustain">
    <img class="sustain-img" v-for="(item, i) in arrImg" :key="i" :src="item" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    arrImg: {
      type: Array,
      default: []
    }
  },
};
</script>

<style scoped lang="scss">
.sustain {
  .sustain-img {
    width: 90%;
    margin: 10px 0;
  }
}
</style>
