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
      type: Object as PropType<Item[]>,
      required: true
    },
    changeDone: {
      type: Object as PropType<(item: Item) => void>,
      required: true
    }
  },
  setup(props) {
    return ({
      changeDone:props.changeDone,
    })
  }
})
</script>

<template>
  <div>
    件数
  </div>
  <ul>
    <TodoItem v-for="item in items" :item="item" :change-done="()=>changeDone(item)"></TodoItem>
  </ul>
</template>