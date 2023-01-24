<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'
</script>

<template>
  <grid :columns="3">
    <article>
      <img src="../assets/images/unit.svg" alt="" />
    </article>

    <article>
      <a href="//hawex.com/" target="_blank">
        <img src="../assets/images/havex.svg" alt="" />
      </a>
    </article>

    <article>
      <img src="../assets/images/foil.svg" alt="" />
    </article>

    <article>
      <img src="../assets/images/orounda.svg" alt="" />
    </article>

    <article>
      <img src="../assets/images/private-finance.svg" alt="" />
    </article>

    <article>
      <a href="//roobinium.io" target="_blank">
        <img src="../assets/images/robinium.svg" alt="" />
      </a>
    </article>

    <article>
      <img src="../assets/images/apple.svg" alt="" />
    </article>

    <article>
      <a href="https://blockchain-life.com/europe" target="_blank">
        <img src="../assets/images/Logo_black_2023.svg" alt="" />
      </a>
    </article>
  </grid>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
article {
  padding: 40px;

  img {
    width: 200px;
    height: 62px;
  }
}
</style>
