<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'
import Player from '../components/player.vue'

const { t } = useI18n()

const view = ref(false)
</script>

<template>
  <section>
    <h2 v-text="t('section_15.title')" />
    <grid :columns="view ? 1 : 2" :class="{ transparent: view }">
      <player v-if="view" uri="https://www.youtube.com/embed/oQcsK8NPq9c" />

      <p v-else></p>

      <article :class="{ clear: view }">
        <h2 v-text="t('section_15.title')" />
        <p v-text="t('section_15.description')" />

        <a href="//portal.vooladmcc.com/auth" class="button" v-text="t('section_15.button')" target="_blank" />

        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 721" width="60" height="60" @click="view = !view">
          <path fill="var(--scheme-v3)" d="m407 493 276-143-276-144v287z" />
        </svg>
      </article>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  .transparent {
    background: none;
    box-shadow: none;
  }

  .clear {
    margin: 0;
  }

  div {
    align-items: center;
    background: url('../assets/images/nft-bank@2x.png') no-repeat center;
    background-size: contain;
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    min-height: 800px;

    @media only screen and (max-width: 954px) {
      min-height: 600px;
    }
    @media only screen and (max-width: 928px) {
      background-position: 50% 5%;
    }
  }

  article {
    background: hsla(209, 63%, 57%, 0.8);
    backdrop-filter: blur(6px);
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    color: var(--scheme-v2);
    margin: 0 -20px 0 20px;
    padding: 40px;

    @media only screen and (max-width: 954px) {
      margin: 0;
      padding: 20px;
    }
  }

  .button {
    background: var(--scheme-v2);
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    color: var(--scheme-v3);
    margin: 40px 0;
  }

  svg {
    background: var(--scheme-v2);
    border-radius: 50px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    cursor: pointer;
    margin: 0 0 0 20px;

    &:hover {
      opacity: 0.6;
    }
  }

  i {
    color: #cecece;
    font-size: 40px;
    margin: 0px 60px 0 0;

    &:last-child {
      font-size: 35px;
      margin: 0;

      color: var(--scheme-v3);
    }
  }
}
</style>
