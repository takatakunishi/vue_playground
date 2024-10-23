<script setup lang="ts">
import type { Item } from ".";
const props = defineProps<{
  item: Item;
  chengeDone: () => void;
}>();
</script>

<template>
  <li @click="chengeDone">
    {{ item.title }}:{{ item.description }} =>
    {{ item.isDone ? "Done" : "Todo" }}
  </li>
</template>
