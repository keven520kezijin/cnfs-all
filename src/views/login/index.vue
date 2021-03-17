<template>
  <div class="page-login">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import pLogin from "./login"
import mLogin from "./mLogin"
export default {
  components: {pLogin, mLogin},
  computed: {
    pageCom() {
      if(this.$store.state.device === 'desktop') {
        return 'pLogin'
      } else {
        return 'mLogin'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page-login {
  height: 100%;
}
</style>