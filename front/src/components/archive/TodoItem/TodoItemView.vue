<template>
  <li @click="chengeDone">
    {{ item.title }}:{{ item.description }} =>
    {{ item.isDone ? "Done" : "Todo" }}
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Item } from ".";
export default defineComponent({
  name: "TodoItem",
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
    chengeDone: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    return { chengeDone: props.chengeDone };
  },
});
</script>
