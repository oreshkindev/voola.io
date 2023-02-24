<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Partners from '../components/partners.vue'

const { t, locale } = useI18n()
</script>

<template>
  <section>
    <partners />

    <article>
      <h2 v-text="t('section_14.title')" />
      <p v-text="t('section_14.description')" />
    </article>

    <ul>
      <li>
        <a href="https://t.me/voola_chat" target="_blank">
          <i class="icon-telegram"></i>
        </a>
      </li>

      <li>
        <a href="//twitter.com/vooladmcc" target="_blank">
          <i class="icon-twitter"></i>
        </a>
      </li>

      <li>
        <a href="//www.instagram.com/vooladmcc" target="_blank">
          <i class="icon-instagram"></i>
        </a>
      </li>

      <li>
        <a href="//medium.com/@vooladmcc" target="_blank">
          <i class="icon-medium"></i>
        </a>
      </li>

      <li>
        <a href="//www.youtube.com/@vooladmcc" target="_blank">
          <i class="icon-youtube"></i>
        </a>
      </li>
    </ul>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  text-align: center;

  article {
    margin: 200px 0 100px;
  }

  svg {
    align-self: center;

    cursor: pointer;
  }

  ul {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(5, 1fr);
    margin: 80px auto 0;

    @media only screen and (max-width: 928px) {
      grid-template-columns: repeat(3, 1fr);
    }

    li {
      i {
        font-size: 50px;
      }
    }
  }

  div {
    justify-items: center;
    margin: 60px 0 0;
  }
}
</style>
