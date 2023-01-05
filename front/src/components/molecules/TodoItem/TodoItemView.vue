<template>
  <li @click="chengeDone">{{ item.title }}:{{ item.description }} => {{ item.isDone ? "Done" : "Todo" }}</li>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import type { Item } from ".";
export default defineComponent({
  name:"TodoItem",
  props:{
    item: {
      type: Object as PropType<Item>,
      required:true
    },
    chengeDone: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const chengeDone = () => {
      props.chengeDone()
    }
    return {chengeDone}
  },
})

</script>