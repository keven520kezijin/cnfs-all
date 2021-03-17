<template>
  <div class="page-layout">
    <component :is="topCom"></component>
    <router-view :key="key" />
    <component v-if="showFooter" :is="footerCom"></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import pTop from "@/components/top";
import mTop from "@/components/mTop";
import pFooter from "@/components/footer";
import mFooter from "@/components/mfooter";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  mixins: [ResizeMixin],
  data() {
    return {
      showFooter: true,
    };
  },
  components: { pTop, mTop, pFooter, mFooter },
  created() {
    if (this.$route.path === "/register" || this.$route.path === "/login") {
      this.showFooter = false;
    }
  },
  computed: {
    ...mapState({
      device: (state) => state.device,
    }),
    topCom() {
      if (this.$store.state.device === "desktop") {
        return "p-top";
      } else {
        return "m-top";
      }
    },
    footerCom() {
      if (this.$store.state.device === "desktop") {
        return "p-footer";
      } else {
        return "m-footer";
      }
    },
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route(to, from) {
      console.log("to: ", to);
      console.log("from: ", from);
      console.log("device: ", this.$store.state.device);
      if (
        (this.$store.state.device === "mobile" && to.path === "/register") ||
        to.path === "/login"
      ) {
        this.showFooter = false;
      }
    },
  },
};
</script>
<style lang="scss">
.page-layout {
  height: 100%;

  .el-message--warning {
    min-width: auto !important;
    background-color: #f0faff !important;
    .el-icon-warning,
    .el-message__content {
      color: #0d8bff;
    }
  }
}
</style>