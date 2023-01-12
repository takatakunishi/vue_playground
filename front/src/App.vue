<script setup lang="ts">
import Text from './components/atoms/Text/Text.vue'
import Button from './components/atoms/Button/Button';
import TodoList from "./components/molecules/TodoList"
</script>

<template>
  <Text msg="ok"></Text>
  <TodoList />
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
