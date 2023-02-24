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
    <grid :columns="view ? 1 : 2">
      <player v-if="view" uri="https://www.youtube.com/embed/qJ1mB2RZSr4" :view="view" />

      <div v-else class="picsource">
        <picture class="transformed">
          <source media="(max-width: 928px)" srcset="../assets/images/[Mockup]-iPhone-25@2x.png" />
          <source media="(min-width: 928px)" srcset="../assets/images/[Mockup]-iPhone-25@2x.png" />
          <img src="../assets/images/[Mockup]-iPhone-25@2x.png" alt="" />
        </picture>

        <picture>
          <source media="(max-width: 928px)" srcset="../assets/images/[Mockup]-iPhone-24.png" />
          <source media="(min-width: 928px)" srcset="../assets/images/[Mockup]-iPhone-24@2x.png" />
          <img src="../assets/images/[Mockup]-iPhone-24@2x.png" alt="" />
        </picture>
      </div>

      <article>
        <h2 v-text="t('section_13.title')" />
        <p v-text="t('section_13.description')" />

        <a href="//vip.voola.vip/update/voola.apk" class="button" v-text="t('section_13.button')" target="_blank" />

        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 721" width="60" height="60" @click="view = !view">
          <path fill="var(--scheme-v3)" d="m407 493 276-143-276-144v287z" />
        </svg>
        <!-- <p v-text="t('section_13.content')" /> -->
        <p></p>

        <i class="icon-apple"></i>
        <a href="https://play.google.com/store/apps/details?id=com.vooladmcc.voola" target="_blank">
          <i class="icon-google"></i>
        </a>
      </article>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  svg {
    background: var(--scheme-v2);
    border-radius: 50px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    cursor: pointer;
    margin: 0 0 0 20px;

    &:hover {
      opacity: 0.6;
    }

    @media only screen and (max-width: 928px) {
      margin: 0 0 40px;
    }
  }

  img {
    max-width: 300px;
  }

  div {
    align-items: center;
  }

  .button {
    background-color: var(--scheme-v2);
    color: var(--scheme-v3);
    margin: 40px 0;
  }

  article {
    background: var(--scheme-v3);
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    color: var(--scheme-v2);
    margin: 0 -20px 0 20px;
    padding: 40px;
  }

  .picsource {
    display: grid;
    place-content: center;
  }
  .transformed {
    filter: blur(3px);
    margin: 0 0 0 -100px;
    position: absolute;
    transform: rotate(-10deg);
    z-index: -1;
  }

  i {
    color: var(--scheme-v2);
    font-size: 40px;
    margin: 0px 60px 0 0;

    &:last-child {
      font-size: 35px;
      margin: 0;
    }
  }
}
</style>
