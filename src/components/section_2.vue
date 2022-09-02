<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'

const { t } = useI18n()
</script>

<template>
  <section>
    <h2 v-text="t('section_2.title')" />

    <grid :columns="3">
      <article>
        <i class="icon-lock"></i>
        <h3 v-text="t('section_2.items.item_0.title')" />
        <p v-text="t('section_2.items.item_0.description')" />
      </article>

      <article>
        <i class="icon-wallet"></i>
        <h3 v-text="t('section_2.items.item_1.title')" />
        <p v-text="t('section_2.items.item_1.description')" />
      </article>

      <article>
        <i class="icon-password"></i>
        <h3 v-text="t('section_2.items.item_2.title')" />
        <p v-text="t('section_2.items.item_2.description')" />
      </article>

      <article>
        <i class="icon-swap"></i>
        <h3 v-text="t('section_2.items.item_3.title')" />
        <p v-text="t('section_2.items.item_3.description')" />
      </article>

      <article>
        <i class="icon-call"></i>
        <h3 v-text="t('section_2.items.item_4.title')" />
        <p v-text="t('section_2.items.item_4.description')" />
      </article>

      <article>
        <i class="icon-shield-done"></i>
        <h3 v-text="t('section_2.items.item_5.title')" />
        <p v-text="t('section_2.items.item_5.description')" />
      </article>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  article {
    background: hsla(0deg, 0%, 100%, 0.5);
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    backdrop-filter: blur(6px);
    border-radius: 28px;
    padding: 40px;
    width: 100%;

    -webkit-backdrop-filter: blur(6px);

    h3 {
      margin: 0 0 20px;
    }

    i {
      font-size: 40px;
      margin: 0 0 20px;
    }
  }
}
</style>
