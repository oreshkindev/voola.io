<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'

const { t } = useI18n()
</script>

<template>
  <section>
    <h2 v-text="t('section_8.title')" />
    <p v-text="t('section_8.description')" />

    <grid :columns="3">
      <p>
        <i class="icon-solana"></i>
        Solana
      </p>

      <p>
        <i class="icon-bnb"></i>
        Binance
      </p>

      <p>
        <i class="icon-ethereum"></i>
        Ethereum
      </p>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  text-align: center;

  div {
    justify-items: center;
    margin: 100px 0 0;
    grid-template-columns: repeat(3, 1fr) !important;

    i {
      display: block;
      font-size: 80px;
      margin: 0 0 20px;

      @media only screen and (max-width: 928px) {
        font-size: 60px;
      }
    }
  }
}
</style>
