<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Licensing from '../components/licensing.vue'

const { t } = useI18n()
</script>

<template>
  <footer>
    <section class="wrapper">
      <ul>
        <li>
          <router-link to="/aml" v-text="t('footer.navbar.items.item_0')" />
        </li>
        <li><router-link to="/stablenft_voola_eng.pdf" v-text="`VOOLA stableNFT`" target="_blank" /></li>
        <li><router-link to="/summary_voola_eng.pdf" v-text="`VOOLA summary`" target="_blank" /></li>
        <li><router-link to="/voola_os_whitepaper_eng.pdf" v-text="`VOOLA OS whitepaper`" target="_blank" /></li>
        <li>
          <a href="https://spacehamster.vooladmcc.com" target="_blank">VOOLA Crypto Hamsters</a>
        </li>
      </ul>

      <ul>
        <li><router-link to="/voola_wallet_pesentation_eng.pdf" v-text="`VOOLA wallet presentation`" target="_blank" /></li>
        <li><router-link to="/voola_wallet_pitch_eng.pdf" v-text="`VOOLA wallet pitch`" target="_blank" /></li>
        <li><router-link to="/voola_wallet_technicalpaper_eng.pdf" v-text="`VOOLA wallet TP`" target="_blank" /></li>
        <li><router-link to="/voola_wallet_whitepaper_eng.pdf" v-text="`VOOLA wallet whitepaper`" target="_blank" /></li>
      </ul>

      <ul>
        <li>
          <router-link to="/privacy_policy_voola.pdf" v-text="t('footer.navbar.items.item_1')" target="_blank" />
        </li>

        <li>
          <router-link to="/cookies-policy" v-text="t('footer.navbar.items.item_2')" />
        </li>

        <li>
          <router-link to="/terms-and-conditions" v-text="t('footer.navbar.items.item_3')" />
        </li>

        <li>
          <router-link to="/contact-us" v-text="t('footer.navbar.items.item_4')" />
        </li>
      </ul>

      <licensing />
    </section>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  background-color: var(--scheme-v4);
  margin-bottom: 0;
  max-width: 100%;
  padding: 20px;

  .wrapper {
    display: grid;
    gap: 40px;
    grid-template: auto / repeat(3, 1fr);
    margin: 0 auto;
    max-width: var(--scheme-max-width);

    @media only screen and (max-width: 928px) {
      grid-template: auto / 1fr;
    }

    ul {
      li {
        line-height: 2.4;
      }
    }
  }
}
</style>
