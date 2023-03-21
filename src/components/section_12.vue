<script setup lang="ts">
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Player from '../components/player.vue'

const view = ref(false)

const { t } = useI18n()
</script>

<template>
  <section>
    <article>
      <h2 v-text="t('section_12.title')" />
      <p v-text="t('section_12.description')" />
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 721" width="60" height="60" @click="view = !view">
        <path fill="var(--scheme-v3)" d="m407 493 276-143-276-144v287z" />
      </svg>
    </article>

    <player v-if="view" uri="https://www.youtube.com/embed/a0O7Jsdg2Tw" />
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  text-align: center;
  h2,
  p {
    max-width: 700px;
    margin: auto auto 40px;
  }

  article {
    background: hsla(209, 63%, 57%, 0.8);
    backdrop-filter: blur(6px);
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    color: var(--scheme-v2);
    margin: auto auto 40px;
    padding: 40px;

    @media only screen and (max-width: 954px) {
      padding: 20px;
    }
  }

  svg {
    background: var(--scheme-v2);
    border-radius: 50px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    cursor: pointer;
    margin: auto;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
