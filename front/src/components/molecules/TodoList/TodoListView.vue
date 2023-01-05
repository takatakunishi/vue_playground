<script lang="ts">
import {defineComponent, PropType, Ref} from "vue"
import type {Item} from "../TodoItem"
import TodoItem from "../TodoItem"

export default defineComponent({
  name:"TodoListView",
  components:{
    TodoItem
  },
  props:{
    items: {
      type: Array as Ref<Item[]>,
      required: true
    }
  }
})
</script>

<template>
  <div>
    件数
  </div>
  <ul>
    <TodoItem v-for="item in items" :item="item"></TodoItem>
  </ul>
  go
</template>