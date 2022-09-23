<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Grid from '../components/grid.vue'
</script>

<template>
  <picture>
    <source media="(max-width: 928px)" srcset="../assets/images/BL22_VOOLA.jpg" />
    <source media="(min-width: 928px)" srcset="../assets/images/BL22_VOOLA.jpg" />
    <img src="../assets/images/BL22_VOOLA.jpg" alt="" />
  </picture>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
picture {
  padding: 20px;

  img {
    max-width: fit-content !important;
  }
}
</style>
