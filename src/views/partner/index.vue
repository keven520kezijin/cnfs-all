<template>
  <div class="partner-page">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import pPartner from "./partner"
import mPartner from "./mPartner"
export default {
  components: {pPartner, mPartner},
  computed: {
    pageCom() {
      if(this.$store.state.device === 'desktop') {
        return 'pPartner'
      } else {
        return 'mPartner'
      }
    }
  }
}
</script>

<style>

</style>