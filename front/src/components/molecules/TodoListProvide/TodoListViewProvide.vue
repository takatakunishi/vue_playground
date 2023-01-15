<script lang="ts" setup>
import type {Item} from "../TodoItemProvide"
import TodoItemProvide from "../TodoItemProvide"

const props = defineProps<{
  items: Item[],
}>()
</script>

<template>
  <div>
    件数
  </div>
  <ul>
    <TodoItemProvide v-for="item in items" :key="item.id" :item="item" ></TodoItemProvide>
  </ul>
</template>