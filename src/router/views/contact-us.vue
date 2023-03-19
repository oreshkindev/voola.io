<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Backward from '../../components/backward.vue'
</script>

<template>
  <section>
    <Backward />

    <h1>Contact Us</h1>

    <article>
      <ul>
        <li>
          Address: 2022 UAB <a href="mailto:sevenpossibilities@inbox.lt?subject=Hello">Labaratory of Seven Possibilities</a> operates VOOLA Platform and is registered under number
          <a href="https://www.registrucentras.lt/jar/p/dok.php?kod=306026599" rel="noreferrer" target="_blank">306026599</a> by the State Enterprise Centre of Registers of the
          Republic of Lithuania as a provider of activities of a virtual currency exchange operator.
        </li>

        <li>Mail: <a href="mailto:info@vooladmcc.com">info@vooladmcc.com</a></li>
      </ul>
    </article>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  height: 80vh;
  margin: 0 auto;

  h1 {
    margin: 4rem 0;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  p {
    margin: 0 0 10px;
  }

  a {
    color: var(--scheme-v3);

    cursor: pointer;

    font-weight: 400;
  }

  ul {
    margin: 2rem 0;

    li {
      list-style: disc;
      margin: 10px 0 0 1rem;
      padding: 0 0 0 1rem;
    }
  }
}
</style>
