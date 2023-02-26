<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const ads = ref(false)

const storage = () => {
  const data = sessionStorage.getItem('vooladmcc_ads')
  if (data) {
    return JSON.parse(data)
  }
  return true
}

const hideAds = () => {
  ads.value = false

  setTimeout(() => {
    sessionStorage.setItem('vooladmcc_ads', 'false')
  }, 1000)
}

setTimeout(() => {
  ads.value = true
}, 10000)
</script>

<template>
  <dialog v-if="storage()" :style="ads ? 'transform: translate(0%, 0);' : 'transform: translate(250%, 0);'">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512" @click="hideAds">
      <path
        d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"
      />
    </svg>

    <p>{{ t('dialog.description') }}</p>

    <a href="//spacehamster.vooladmcc.com" target="_blank">{{ t('dialog.title') }}</a>
  </dialog>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
dialog {
  background: hsla(0deg, 0%, 100%, 0.5);
  box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
  backdrop-filter: blur(6px);
  border: none;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  inset: 20px;
  margin: auto 0 0 auto;
  padding: 20px 40px;
  place-items: center;
  position: fixed;
  text-align: center;
  transform: translate(250%, 0);
  transition: all 1s ease-in-out;
  z-index: 999;

  a {
    background: #4e94d7;
    border-radius: 50px;
    color: #ffffff;
    display: inline-block;
    margin: auto;
    padding: 15px 40px;
  }

  svg {
    cursor: pointer;
    opacity: 0;
    fill: #ccc;
    position: absolute;
    max-width: 18px;
    right: 10px;
    top: 10px;

    &:hover {
      fill: var(--scheme-v3);
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
}
</style>
