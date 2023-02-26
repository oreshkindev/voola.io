<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
defineProps<{ columns: number }>()
</script>

<template>
  <div :class="['grid', columns == 3 ? 'grid__3' : columns == 2 ? 'grid__2' : '']">
    <slot></slot>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid {
  display: grid;
  gap: var(--scheme-gap);

  &__2 {
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 928px) {
      grid-template: auto / 1fr;
      place-content: center;
    }
  }

  &__3 {
    grid-template: auto / repeat(3, 1fr);

    @media only screen and (max-width: 928px) {
      grid-template: auto / repeat(2, 1fr);
      place-content: center;
    }

    @media only screen and (max-width: 628px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
