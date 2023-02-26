<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'

const { t } = useI18n()
</script>

<template>
  <section>
    <grid :columns="2">
      <article>
        <h2 v-text="t('section_7.title')" />
        <p v-text="t('section_7.description')" />
      </article>

      <picture>
        <img src="../assets/images/Group-108@2x.png" alt="" />
      </picture>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  img {
    max-width: 400px;
  }
  div {
    align-items: center;
  }
}
</style>
