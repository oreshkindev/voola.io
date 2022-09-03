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
        <source media="(max-width: 928px)" srcset="../assets/images/Phone.png" />
        <source media="(min-width: 928px)" srcset="../assets/images/Phone@2x.png" />
        <img src="../assets/images/Phone@2x.png" alt="" />
      </picture>

      <article>
        <h2 v-text="t('section_4.title')" />
        <ul>
          <li>
            <i class="icon-arrow-down-circle"></i>
            {{ t('section_4.items.item_0') }}
          </li>
          <li>
            <i class="icon-wallet"></i>
            {{ t('section_4.items.item_1') }}
          </li>
          <li>
            <i class="icon-tick-square"></i>
            {{ t('section_4.items.item_2') }}
          </li>
          <li>
            <a href="//vip.voola.vip/update/voola-90.apk" class="button" v-text="t('section_4.button')" target="_blank" />
          </li>
        </ul>
      </article>
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
  ul {
    margin: 40px 0;
    li {
      align-items: center;
      display: flex;
      margin: 20px 0;

      @media only screen and (max-width: 928px) {
        flex-direction: column;
      }
    }
  }

  i {
    background-color: var(--scheme-v3);
    border-radius: 50px;
    color: var(--scheme-v2);
    font-size: 36px;
    margin: 0 20px;
    padding: 20px;

    @media only screen and (max-width: 928px) {
      margin: 0 0 20px;
    }
  }
}
</style>
