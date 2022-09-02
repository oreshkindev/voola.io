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
        <h2 v-text="t('section_10.title')" />

        <p v-html="t('section_10.description')" />

        <ul>
          <li>
            <i class="icon-3-user"></i>
            {{ t('section_10.items.item_0') }}
          </li>

          <li>
            <i class="icon-document"></i>
            {{ t('section_10.items.item_1') }}
          </li>

          <li>
            <i class="icon-wallet"></i>
            {{ t('section_10.items.item_2') }}
          </li>
        </ul>

        <p v-text="t('section_10.content')" />
      </article>

      <picture>
        <source media="(max-width: 928px)" srcset="../assets/images/Image.png" />
        <source media="(min-width: 928px)" srcset="../assets/images/Image@2x.png" />
        <img src="../assets/images/Image@2x.png" alt="" />
      </picture>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  img {
    max-width: 500px;
  }
  div {
    align-items: center;
  }
  ul {
    margin: 40px 0;
    li {
      align-items: center;
      font-weight: 400;
      display: flex;
      margin: 20px 0;
      max-width: 380px;

      @media only screen and (max-width: 928px) {
        flex-direction: column;
        margin: 20px auto;
      }
    }
  }

  i {
    background-color: var(--scheme-v3);
    border-radius: 50px;
    color: var(--scheme-v2);
    font-size: 36px;
    margin: 0 20px 0 0;
    padding: 20px;

    @media only screen and (max-width: 928px) {
      margin: 0 0 20px;
    }
  }
}
</style>
