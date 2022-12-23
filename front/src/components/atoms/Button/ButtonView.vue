<template>
    <button @click="handleClick">
{{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"ButtonView",
    props: {
        label: {
            type: String,
            required: true
        },
        click: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const handleClick = () => {
            props.click();
        }
        return {
            handleClick
        }
    }
})
</script>