<template>
  <div class="regionalAgent-page">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import pRegionalAgent from "./regionalAgent"
import mRegionalAgent from "./mRegionalAgent"
export default {
  components: {pRegionalAgent, mRegionalAgent},
  computed: {
    pageCom() {
      if(this.$store.state.device === 'desktop') {
        return 'pRegionalAgent'
      } else {
        return 'mRegionalAgent'
      }
    }
  }

}
</script>

<style>
.regionalAgent-page {}
</style>