<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n()

const items = [
  {
    id: 'a',
    title: t('navbar.items.item_0'),
  },
  {
    id: 'b',
    title: t('navbar.items.item_1'),
  },
  {
    id: 'c',
    title: t('navbar.items.item_2'),
  },
  {
    id: 'd',
    title: t('navbar.items.item_3'),
  },
  {
    id: 'e',
    title: t('navbar.items.item_4'),
  },
  {
    id: 'f',
    title: t('navbar.items.item_5'),
  },
  {
    id: 'g',
    title: t('navbar.items.item_6'),
  },
  {
    id: '',
    title: t('navbar.items.item_7'),
  },
]

const selectedItem = ref(0)

let isActive = false

const setActive = (i: number) => (selectedItem.value = i)
items.forEach((item, i) => {
  return (isActive = item == items[i])
})

const setLocale = (item: string) => (locale.value = item)
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, i) in items" :key="i" @click="setActive(i)" :class="{ active: i == selectedItem }">
        <router-link :to="i == 7 ? '/contact-us' : ''" v-text="t('navbar.items.item_' + i + '')" v-scroll-to="'#' + item.id" />
      </li>
    </ul>

    <ul>
      <li v-for="item in availableLocales" :key="item" @click="setLocale(item)" :class="{ active: item == locale }">
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  background: var(--scheme-v2);
  box-shadow: -5px 5px 25px 5px rgba(21, 31, 50, 0.031);
  // padding: calc(var(--header-size) + 60px) 214px 40px 40px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  ul {
    padding: calc(var(--header-size) + 60px) 214px 40px 40px;

    @media only screen and (max-width: 928px) {
      padding: calc(var(--header-size) + 60px) 40px 40px 40px;
    }

    li {
      cursor: pointer;
    }

    &:first-child {
      li {
        margin-bottom: 10px;
      }
    }

    &:last-child {
      border-top: 1px solid var(--scheme-v4);
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      margin: 40px 0 0 0;
    }
  }

  .active {
    color: var(--scheme-v3);
  }
}
</style>
