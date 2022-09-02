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
        <h2 v-text="t('section_12.title')" />

        <p v-html="t('section_12.description')" />

        <!-- <a href="//os.voola.io" class="button" v-text="t('section_12.button')" target="_blank" /> -->
      </article>

      <picture>
        <source media="(max-width: 928px)" srcset="../assets/images/Mockup-iPhone.png" />
        <source media="(min-width: 928px)" srcset="../assets/images/Mockup-iPhone@2x.png" />
        <img src="../assets/images/Mockup-iPhone@2x.png" alt="" />
      </picture>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  img {
    max-width: 300px;
  }
  div {
    align-items: center;
  }
}
</style>
