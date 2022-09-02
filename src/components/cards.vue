<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
defineProps<{ icon: string }>()
</script>

<template>
  <article>
    <i :class="'icon-' + icon"></i>
    <slot></slot>
  </article>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
article {
  background: hsla(0deg, 0%, 100%, 0.5);
  box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
  backdrop-filter: blur(6px);
  border-radius: 28px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 76px 1fr;
  max-width: 420px;
  width: 100%;
  padding: 20px;

  -webkit-backdrop-filter: blur(6px);

  h3 {
    grid-area: 1 / 2 / 2 / 4;
  }

  p {
    grid-area: 2 / 2 / 3 / 4;
  }

  i {
    align-self: flex-start;
    background-color: var(--scheme-v3);
    border-radius: 50px;
    color: var(--scheme-v2);
    font-size: 36px;
    grid-area: 1 / 1 / 3 / 2;
    padding: 20px;
  }
  @media only screen and (max-width: 928px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
</style>
