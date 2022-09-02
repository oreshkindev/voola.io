<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from '../components/navbar.vue'

const { t } = useI18n()

const active = ref(false)

const headRef = ref()

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 600) {
      headRef.value.classList.remove('hide')
    } else {
      headRef.value.classList.add('hide')
      active.value = false
    }
  })
})
</script>

<template>
  <header ref="headRef" class="header hide">
    <div class="header__wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 59.83" width="83" height="25">
        <path
          d="M200 59.83s-44.13-48.2-46.97-51.04c-2.85-2.85-6.17-5.05-9.88-6.56C139.57.78 135.79.04 131.92.04s-7.65.74-11.23 2.19c-3.71 1.5-7.03 3.71-9.88 6.56l-.09.09-6.99 7.62 8.92 8.57 7-7.63c6.83-6.73 17.85-6.7 24.64.09 3.3 3.3 5.12 7.69 5.12 12.36s-1.82 9.06-5.12 12.36c-6.79 6.79-17.82 6.82-24.64.09L89.03 8.98l-.09-.1-.09-.09C86 5.94 82.68 3.74 78.97 2.23 75.38.78 71.61.04 67.73.04S60.08.78 56.5 2.23c-3.71 1.5-7.03 3.71-9.88 6.56-2.85 2.85-5.05 6.17-6.56 9.88-.67 1.64-1.18 3.33-1.54 5.04L16.79 0H0s43.77 48.16 46.62 51.01c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56l.09-.09 7-7.63-8.44-9.12L80 42.35c-6.83 6.73-17.85 6.7-24.64-.09s-6.82-17.91 0-24.73c6.79-6.79 17.82-6.82 24.64-.09l30.61 33.37.09.1.09.09c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56 2.85-2.85 5.05-6.17 6.56-9.88.7-1.73 1.24-3.51 1.6-5.32l22.03 24.02h16.79Z"
        />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="31.25" height="25" :class="[active ? 'active' : '']" @click="active = !active">
        <rect width="100" height="12" rx="6" />
        <rect width="100" height="12" y="28" rx="6" />
        <rect width="100" height="12" y="58" rx="6" />
      </svg>

      <Navbar v-if="active" />
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hide {
  transform: translateY(-200px);
}
.header {
  background-color: var(--scheme-v2);
  box-shadow: 0 15px 15px 5px rgba(21, 31, 50, 0.031);

  position: sticky;
  top: 0;
  transition: transform 0.2s ease-in-out;
  z-index: 1;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: var(--scheme-max-width);
    padding: 20px;
    position: relative;
  }
}

svg {
  cursor: pointer;

  max-height: var(--header-size);
  z-index: 2;

  &:first-child {
    z-index: 0;
  }

  & * {
    transition: all 0.2s ease-in-out;
  }
}

.active * {
  &:nth-child(1) {
    transform: translate(19px, 0px) rotate(45deg);
  }
  &:nth-child(2) {
    // transform: translate(-9px, 51px) rotate(-45deg);
    opacity: 0;
  }
  &:nth-child(3) {
    transform: translate(-30px, 30px) rotate(-45deg);
  }
}
</style>
