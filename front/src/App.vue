<script setup lang="ts">
import TodoList from "./components/molecules/TodoListProvide";
import TodoLists from "./components/molecules/NormalTodo/TodoList";
import Checkbox from "./components/Checkbox/index.vue";
import { ref } from "vue";

const checked = ref(false);
const changeCheck = (value: boolean) => {
  checked.value = value;
  console.log(value, checked.value);
};
</script>

<template>
  <TodoList />
  <TodoLists />
  <Checkbox @change-check="changeCheck" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
