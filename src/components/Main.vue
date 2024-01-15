<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import TopHeader from './TopHeader.vue'
import ProductsInfo from './ProductsInfo.vue'

defineProps<{ msg: string }>()

</script>

<template>
    <main class="container wrapper font-poppins md:mx-auto relative gap-10">
        <div class="side w-full lg:min-w-56 bg-white flex flex-col">
            <Sidebar :msg="msg" ></Sidebar>
        </div>
        <div class="header">
            <TopHeader></TopHeader>
        </div>
        <div class="content">
            <ProductsInfo></ProductsInfo>
        </div>

    </main>
</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 2.5rem;
  grid-template-areas:
    "sidebar"
    "topheader"
    "content";
}


@media (min-width: 976px) {
  .wrapper {
    grid-template-columns: 1fr minmax(0, 3fr);
    grid-template-areas:
      "sidebar topheader"
      "sidebar content"
      "sidebar content"
      "sidebar content";
  }
}
.side {
    grid-area: sidebar;
}
.header {
    grid-area: topheader;
}
.content {
  grid-area: content;
}


</style>