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
      <picture>
        <source media="(max-width: 928px)" srcset="../assets/images/Asset-5@4x.png" />
        <source media="(min-width: 928px)" srcset="../assets/images/Asset-5@4x.png" />
        <img src="../assets/images/Asset-5@4x.png" alt="" />
      </picture>

      <article>
        <h2 v-text="t('section_9.title')" />
        <p v-text="t('section_9.description')" />
      </article>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  img {
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    max-width: 500px;
  }
  div {
    align-items: center;
  }
}
</style>
