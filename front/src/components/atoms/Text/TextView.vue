<script setup lang="ts">

const props = defineProps<{
  text: string,
}>()
</script>

<template>
  <p>{{ text }}</p>
</template>