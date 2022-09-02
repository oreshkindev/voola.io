<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'

const { t } = useI18n()
</script>

<template>
  <section>
    <h2 v-text="t('section_6.title')" />
    <p v-text="t('section_6.description')" />
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  text-align: center;
  h2,
  p {
    max-width: 700px;
    margin: auto auto 40px;
  }
}
</style>
