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
      <i class="icon-chat"></i>

      <article>
        <h2 v-text="t('section_11.title')" />

        <p v-html="t('section_11.description')" />

        <a href="//vip.voola.vip/weola/WeOla-full-arm64-v8a-release.apk" class="button" v-text="t('section_11.button')" target="_blank" />
      </article>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  div {
    i {
      align-self: center;
      font-size: 300px;

      @media only screen and (max-width: 928px) {
        font-size: 200px;
      }
    }
  }
}
</style>
