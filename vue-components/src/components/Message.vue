<template>
    <div class="message">
        <div class="text">{{ msg }}</div>
    </div>
</template>

<script lang="ts" setup>
type theme ='warn'|'success'|'info'|'error'
defineProps({
    msg: String,
    theme: {
        type: String as () => theme,
        default: 'warn'
    }
})

</script>

<style scoped>
.message{
    position: fixed;
    top: 10px;
    left: 50%;
}
</style>