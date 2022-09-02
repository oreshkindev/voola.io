<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Licensing from '../components/licensing.vue'

const { t } = useI18n()
</script>

<template>
  <section class="footer">
    <div class="footer__wrapper">
      <ul>
        <router-link to="/aml" v-text="t('footer.navbar.items.item_0')" />
        <router-link to="/privacy-policy" v-text="t('footer.navbar.items.item_1')" />
        <router-link to="/cookies-policy" v-text="t('footer.navbar.items.item_2')" />
        <router-link to="/terms-and-conditions" v-text="t('footer.navbar.items.item_3')" />
        <router-link to="/contact-us" v-text="t('footer.navbar.items.item_4')" />
      </ul>

      <licensing />
    </div>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  background-color: var(--scheme-v4);
  margin-bottom: 0;
  max-width: 100%;

  &__wrapper {
    margin: 0 auto;
    max-width: var(--scheme-max-width);

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        margin: 10px 0;
      }

      @media only screen and (max-width: 628px) {
        align-items: center;
        flex-direction: column;
      }
    }
  }
}
</style>
