<script lang="ts" setup>
import type {Item} from "../TodoItem"
import TodoItem from "../TodoItem"

defineProps<{
  items: Item[],
  changeDone: (index: Item) => void,
  remove: (item: Item) => void
}>()
</script>

<template>
  <div>
    件数
  </div>
  <ul>
    <TodoItem v-for="item in items" :item="item" :key="item.id" :change-done="()=>changeDone(item)" :remove="() => remove(item)"></TodoItem>
  </ul>
</template>