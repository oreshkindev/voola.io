<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Grid from '../components/grid.vue'
</script>

<template>
  <nav>
    <router-link to="/" custom v-slot="{ navigate }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" v-on:click="navigate">
        <path fill="none" stroke-width="1.5" d="M4.25 12.2743h15m-8.9502 6.0244-6.05-6.024 6.05-6.025" />
      </svg>
    </router-link>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  background: var(--scheme-v2);
  padding: 20px 0;
  position: sticky;
  top: 0;

  svg {
    cursor: pointer;

    max-width: 40px;
    stroke: var(--scheme-v3);
    transition: 0.3s ease-in-out;

    &:hover {
      stroke: var(--scheme-v3);
    }
  }
}
</style>
