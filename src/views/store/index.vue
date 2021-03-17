<template>
  <div class="store-page">
    <p-store v-if="$store.state.device === 'desktop'" />
    <m-store v-if="$store.state.device === 'mobile'" />
  </div>
</template>

<script>
import pStore from "./store"
import mStore from "./mStore"
export default {
  components: {
    pStore,
    mStore
  }
}
</script>

<style>

</style>