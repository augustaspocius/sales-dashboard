<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const searchString = ref('');
const notificationUrl = ref('/notification.svg');
const profileAvatarUrl = ref('/images/profile-avatar.png');

</script>

<template>
    <div class="flex flex-col lg:flex-row mt-14 h-[3.25rem] gap-4">
        <input class="searchinput border-2 border-lightGrey border-opacity-20 rounded-md lg:max-w-[40rem] w-full py-2
                    px-3 placeholder:text-grey focus:outline-grey" type="text" placeholder="Search"  v-model="searchString" />
        
        <div class="flex gap-4 lg:ml-auto">
            <button class="relative rounded-md bg-white px-4 py-2 w-[3.25rem] aspect-square">
                <div class="absolute right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow p-[0.4rem]"></div>
                <img class="" :src="notificationUrl" alt="notification" />
            </button>
            <img :src="profileAvatarUrl" alt="profile" class="rounded-md w-[3.25rem] aspect-square" />
        </div>
    </div>
</template>

<style scoped>
.searchinput::placeholder::after {
    background: url('./search-normal.svg');
    margin-right: 0.5rem;
}
</style>
