<template>
  <div class="main-page">
    <p-home v-if="$store.state.device === 'desktop'" />
    <m-home v-if="$store.state.device === 'mobile'" />
  </div>
</template>

<script>
import pHome from "./home"
import mHome from "./mHome"
export default {
  components: {
    pHome,
    mHome
  }
};
</script>

<style>
</style>