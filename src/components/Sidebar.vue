<script setup lang="ts">
import NavBar from './NavBar.vue';

defineProps<{ msg: string }>()

</script>

<template>
    <h1 class="text-2xl text-darkBlue font-semibold pb-16 pl-10 pt-14">
        {{ msg }}
    </h1>
    <!-- navbar -->
    <NavBar></NavBar>
</template>

<style scoped>
</style>
