<template>
  <div class="page-register">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import pRegister from "./register"
import mRegister from "./mRegister"
export default {
  components: {pRegister, mRegister},
  computed: {
    pageCom() {
      if(this.$store.state.device === 'desktop') {
        return 'pRegister'
      } else {
        return 'mRegister'
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