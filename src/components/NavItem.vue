<script setup lang="ts">
import NavBar from './NavBar.vue';

defineProps<{ navText: string, iconUrl:string }>()

</script>

<template>
    <slot>
        <div class="flex gap-4">
            <img class="logo" :src="iconUrl" alt="icon" />
            <div>{{ navText }}</div>
        </div>
    </slot>
</template>

<style scoped>
</style>
