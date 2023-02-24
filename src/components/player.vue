<script setup lang="ts">
interface Player {
  uri: string
}

defineProps<Player>()
</script>

<template>
  <iframe
    width="560"
    height="315"
    :src="uri"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 100%;
  min-height: 600px;

  @media only screen and (max-width: 928px) {
    min-height: 400px;
    order: 1;
  }
}
</style>
