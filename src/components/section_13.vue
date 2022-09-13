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
        <source media="(max-width: 928px)" srcset="../assets/images/[Mockup]-iPhone-24.png" />
        <source media="(min-width: 928px)" srcset="../assets/images/[Mockup]-iPhone-24@2x.png" />
        <img src="../assets/images/[Mockup]-iPhone-24@2x.png" alt="" />
      </picture>

      <article>
        <h2 v-text="t('section_13.title')" />
        <p v-text="t('section_13.description')" />

        <a href="//vip.voola.vip/update/voola.apk" class="button" v-text="t('section_13.button')" target="_blank" />
        <p v-text="t('section_13.content')" />

        <i class="icon-apple"></i>
        <i class="icon-google"></i>
      </article>
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
  button {
    margin: 40px 0;
  }
  i {
    color: #cecece;
    font-size: 40px;
    margin: 20px 60px 0 0;

    &:last-child {
      font-size: 35px;
    }
  }
}
</style>
