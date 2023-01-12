<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Text from './components/atoms/Text/Text.vue'
import Button from './components/atoms/Button/Button';
import TodoItem from './components/molecules/TodoItem';
import TodoList from './components/molecules/TodoList';
import TodoListTwo from './components/molecules/TodoListTwo';
</script>

<template>
  <Text msg="ok"></Text>
  <Button label="hello"></Button>
  <TodoListTwo ></TodoListTwo>
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
