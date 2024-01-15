<script setup lang="ts">
import { ref } from 'vue'
import SearchArea from './SearchArea.vue';
import ProductsTable from './ProductsTable.vue';

defineProps<{ msg: string }>()

const searchString = ref('');

</script>

<template>
    
    <div class="flex flex-col">
        <h2 class="text-2xl font-medium pt-11 pb-7">
            Products Information
        </h2>
        
        <div class="flex gap-6 w-[35rem]">
            <SearchArea label="Title" placeholderText="Enter Title"></SearchArea>
            <SearchArea label="Brand" placeholderText="Enter Brand"></SearchArea>
        </div>
        <div class="py-8">
            <ProductsTable></ProductsTable>
        </div>
    </div>
    
</template>

<style scoped>
</style>
