<script setup lang="ts">
import { ref, watch } from 'vue'
import { fetchHelper } from '../fetchHelper.ts';
import SearchArea from './SearchArea.vue';
import ProductsTable from './ProductsTable.vue';

const titleSearch = ref('');
const brandSearch = ref('');
const products = ref([]);

const fetchProducts = async () => {
    if (titleSearch.value && brandSearch.value) {
        const url = new URL('https://dummyjson.com/products');
        url.searchParams.append('limit', '10');
        url.searchParams.append('select', 'title,category,brand,price,stock,rating');
    
        if (titleSearch.value) {
            url.searchParams.append('title', titleSearch.value);
        }
        if (brandSearch.value) {
            url.searchParams.append('brand', brandSearch.value);
        }
    
        try {
            const data = await fetchHelper<{ products: Array<object> }>(url.toString());
            const filteredProducts = data.products.filter((product: any) => {
                return product.title.toLowerCase().includes(titleSearch.value.toLowerCase()) && product.brand.toLowerCase().includes(brandSearch.value.toLowerCase());
            });
            
            products.value = filteredProducts;
            
            
            console.log('products', products.value[0].title);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }
};

watch([titleSearch, brandSearch], fetchProducts, { immediate: true });

const updateSearch = (value: any, type: any) => {
    if (type === 'title') {
        titleSearch.value = value;
    } else if (type === 'brand') {
        brandSearch.value = value;
    }
};

</script>

<template>
    
    <div class="flex flex-col">
        <h2 class="text-2xl font-medium pt-11 pb-7">
            Products Information
        </h2>
        
        <div class="flex gap-6 w-[35rem]">
            <SearchArea label="Title" @updateSearch="value => updateSearch(value, 'title')" placeholderText="Enter Title"></SearchArea>
            <SearchArea label="Brand" @updateSearch="value => updateSearch(value, 'brand')" placeholderText="Enter Brand"></SearchArea>
        </div>
        <div class="py-8">
            <ProductsTable :products="products"></ProductsTable>
        </div>
    </div>
    
</template>

<style scoped>
</style>
