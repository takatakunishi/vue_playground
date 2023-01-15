<script setup lang="ts">
defineProps<{
    label:string,
    click:()=>void
}>()
</script>

<template>
    <button @click="click">{{ label }}</button>
</template>