<template>
    <p id="atom-text">{{msg}}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    name:"Text",
    props: {
        msg: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
#atom-text{
    color:red;
}
</style>