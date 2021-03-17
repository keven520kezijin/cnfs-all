<template>
  <div class="banner" :style="{backgroundImage: `url(${bgImg})`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    bgImg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.banner {
  height: 284px;
  width: 100%;
  background-size: 423px 284px;
  background-position: center;
  display: flex;
  align-items: flex-end;
}
</style>
