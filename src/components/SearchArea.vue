<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ label: string, placeholderText: string }>()

const searchString = ref('');
</script>

<template>
    
    <div class="flex flex-col w-full">
        <label class="block text-base font-normal mb-4" :for="label">
            {{ label }}
        </label>
        <input class="border-2 border-lightGrey border-opacity-20 rounded w-full py-2
                    px-3 placeholder:text-grey focus:outline-grey"
            :id="label" type="text"
            :placeholder="placeholderText"
            v-model="searchString">
            
        <table>
            
        </table>
    </div>
</template>

<style scoped>
</style>
