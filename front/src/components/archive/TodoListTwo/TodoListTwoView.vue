<script lang="ts" setup>
import type {Item} from "../TodoItem"
import TodoItem from "../TodoItemTwo"

defineProps<{
  items: Item[],
  changeDone: (item: Item) => void
}>()
</script>

<template>
  <div>
    件数
  </div>
  <ul>
    <TodoItem v-for="item in items" :item="item" :change-done="()=>changeDone(item)"></TodoItem>
  </ul>
</template>