<template>
    <div class="grid grid-cols-2">
        <div>
            <v-slot class="col-span-1 row-span-full w-full md:min-w-56 bg-white" name="sidebar"/>
        </div>
        <div>
            <v-slot class="col-start-2 col-span-full" name="topheader"/>
        </div>
        <div>
            <v-slot name="content"/>
        </div>
    </div>
    <div class="grid lg:grid-cols-4 lg:grid-rows-10 h-screen gap-10">
        <div class="col-span-1 row-span-full w-full md:min-w-56 bg-white">
            <Sidebar :msg="msg" ></Sidebar>
        </div>
        <div class="col-start-2 col-span-full">
            <TopHeader></TopHeader>
        </div>
        <div class="col-start-2 col-span-full row-start-2">
            <ProductsInfo></ProductsInfo>
        </div>
        
    </div>
</template>