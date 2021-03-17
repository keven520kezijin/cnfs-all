<template>
  <div class="page-register">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import pPasswordFind from "./passwordFind"
import mPasswordFind from "./mPasswordFind"
export default {
  components: {pPasswordFind, mPasswordFind},
  computed: {
    pageCom() {
      if(this.$store.state.device === 'desktop') {
        return 'pPasswordFind'
      } else {
        return 'mPasswordFind'
      }
    }
  }

}
</script>

<style scoped lang="scss">
.page-register {
  height: 100%;
}
</style>