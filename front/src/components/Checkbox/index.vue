<script lang="ts" setup>
import { watch } from 'vue';

const {
  checked = true
} = defineProps<{
  checked?: boolean;
}>();

const emits = defineEmits<{(e: 'changeCheck', value: boolean): void}>()

const change = (e: Event) => {
  emits('changeCheck', (e.target as HTMLInputElement).checked)
}

watch(() => checked, (value) => {
  console.log({value})
})
console.log("first",{checked})
</script>

<template>
  <label>Checkbox
    <input type="checkbox" @change="change" :checked="checked"/>
  </label>
</template>

<style scoped lang="scss">
</style>