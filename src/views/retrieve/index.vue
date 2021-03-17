<template>
  <div class="retrieve-page">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import pRetrieve from "./retrieve"
import mRetrieve from "./mRetrieve"
export default {
  components: {pRetrieve, mRetrieve},
  computed: {
    pageCom() {
      if(this.$store.state.device === 'desktop') {
        return 'pRetrieve'
      } else {
        return 'mRetrieve'
      }
    }
  }
}
</script>

<style>

</style>