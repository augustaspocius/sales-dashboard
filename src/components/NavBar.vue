<script setup lang="ts">
import NavItem from './NavItem.vue';
import { reactive } from 'vue';
defineProps<{ msg: string }>()

const listItems = reactive([
    {
        id: 1,
        navText: "Dashboard",
        iconUrl: "dashboard",
        isActive: true
    },
    {   
        id: 2,
        navText: "Lab Test",
        iconUrl: "clipboard",
        isActive: false
    },
    {   
        id: 3,
        navText: "Appointment",
        iconUrl: "calendar-tick",
        isActive: false
    },
    {   
        id: 4,
        navText: "Medicine Order",
        iconUrl: "bag-tick2",
        isActive: false
    },
    {   
        id: 5,
        navText: "Message",
        iconUrl: "sms",
        isActive: false
    },
    {   
        id: 6,
        navText: "Payment",
        iconUrl: "empty-wallet",
        isActive: false
    },
    {   
        id: 7,
        navText: "Settings",
        iconUrl: "setting-2",
        isActive: false
    },
    {   
        id: 8,
        navText: "Help",
        iconUrl: "question",
        isActive: false,
        isBottom: true
    },
]);


const setActiveItem = (id) => {
    for (const item of listItems) {
        item.isActive = item.id === id;
    }
};

</script>

<template>
    <ul class="flex flex-col justify-start flex-1 gap-10 w-full">
        <li v-for="item in listItems" :key="`nav-item-${item.id}`"
            :class="[
                item.isActive ? 'text-blue border-l-2 border-blue' : 'text-darkGrey',
                item.isBottom ? 'mt-auto mb-4' : '',
                'flex pl-10 pr-5 py-2 cursor-pointer hover:text-blue hover:border-l-2 hover:border-blue'
            ]" 
            @click="setActiveItem(item.id)">
            <NavItem :id="item.id" :navText="item.navText" :iconUrl="item.isActive ? `${item.iconUrl}-active.svg`: `${item.iconUrl}.svg`" />
        </li>
    </ul>
</template>

<style scoped>
</style>
