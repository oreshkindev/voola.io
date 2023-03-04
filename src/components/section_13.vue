<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Player from '../components/player.vue'
import Form from '../components/form.vue'

const { t } = useI18n()

const view = ref(false)

const visible = ref(false)
</script>

<template>
  <section>
    <player v-if="view" uri="https://www.youtube.com/embed/qJ1mB2RZSr4" :view="view" />

    <picture v-else>
      <img src="../assets/images/[Mockup]-iPhone-25@2x.png" alt="" />
      <img src="../assets/images/[Mockup]-iPhone-24@2x.png" alt="" />
    </picture>

    <article v-if="!visible">
      <h2 v-text="t('section_13.title')" />

      <p v-text="t('section_13.description')" />

      <ul>
        <li><a href="//vip.voola.vip/update/voola.apk" class="button" v-text="t('section_13.button')" target="_blank" /></li>

        <li>
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 721" width="60" height="60" @click="view = !view">
            <path fill="var(--scheme-v3)" d="m407 493 276-143-276-144v287z" />
          </svg>
        </li>
      </ul>

      <ul>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.vooladmcc.voola" target="_blank">
            <i class="icon-google"></i>
          </a>
        </li>

        <li><i class="icon-apple" @click="visible = !visible"></i>TestFlight</li>
      </ul>
    </article>

    <Form ctx="wallet-app" v-else @visible="visible = false" />
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  display: grid;
  gap: 40px;
  grid-template: 1fr / repeat(2, 1fr);
  place-items: center;

  @media only screen and (max-width: 928px) {
    grid-template: 1fr / 1fr;
  }

  svg {
    background: var(--scheme-v2);
    border-radius: 50px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    cursor: pointer;

    &:hover {
      opacity: 0.6;
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

    @media only screen and (max-width: 928px) {
      padding: 16px 40px;
    }
  }

  article {
    background: var(--scheme-v3);
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
    color: var(--scheme-v2);
    margin: 0 -20px 0 20px;
    padding: 40px;

    ul {
      display: flex;
      gap: 40px;
      place-items: center;
    }

    @media only screen and (max-width: 928px) {
      margin: auto;
    }
  }

  picture {
    display: grid;
    grid-template: 1fr / repeat(2, auto);

    img {
      &:first-child {
        filter: blur(3px);
        margin: 0 0 0 -100px;
        position: absolute;
        transform: rotate(-10deg);
        z-index: -1;
      }
    }
  }

  i {
    color: var(--scheme-v2);
    cursor: pointer;
    font-size: 35px;

    &:hover {
      opacity: 0.6;
    }

    &.icon-apple {
      font-size: 40px;
      vertical-align: middle;
      margin: -10px 10px 0 0;
    }
  }
}
</style>
