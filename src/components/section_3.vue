<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from '../components/grid.vue'
import Cards from '../components/cards.vue'

const { t } = useI18n()
</script>

<template>
  <section>
    <h2 v-text="t('section_3.title')" />

    <grid :columns="2">
      <div class="empty"></div>

      <Cards icon="edit">
        <h3 v-text="t('section_3.items.item_0.title')" />
        <p v-text="t('section_3.items.item_0.description')" />
      </Cards>

      <!-- <Cards icon="location">
        <h3 v-text="t('section_3.items.item_1.title')" />
        <p v-text="t('section_2.items.item_1.description')" />
      </Cards> -->

      <div class="empty"></div>

      <div class="empty"></div>

      <Cards icon="buy">
        <h3 v-text="t('section_3.items.item_2.title')" />
        <p v-text="t('section_3.items.item_2.description')" />
      </Cards>
    </grid>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  background: url('../assets/images/Group-1-1@2x.png') 50% 50% no-repeat;
  background-size: 600px;
  padding: 150px 20px;

  @media only screen and (max-width: 928px) {
    article {
      margin: auto;
    }
    .empty {
      display: none;
    }
  }
}
</style>
