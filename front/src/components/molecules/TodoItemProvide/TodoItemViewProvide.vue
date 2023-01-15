
<script setup lang="ts">
import type { Item } from ".";
import Button from "../../atoms/Button/Button";
const props = defineProps<{
  item:Item,
  changeDone:() => void,
  remove:() => void
}>()
</script>

<template>
  <li @click="changeDone">{{ item.title }}:{{ item.description }} => {{ item.isDone ? "Done" : "Todo" }}</li>
  <Button :label="'削除'" :click="remove" ></Button>
</template>